"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  /** 0..1 energia extra, elevada brevemente quando o cursor clica no logo */
  energyRef: { current: number };
};

const COUNT = 2600;
const Z_START = -16;
const Z_EDGE = 1.8;
const SPREAD_X = 9;

export default function GoldParticleFlow({ energyRef }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
    camera.position.set(0, 2.3, 8.2);
    camera.lookAt(0, -1.3, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    // ---- particle state ----
    const positions = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const bright = new Float32Array(COUNT);
    const vz = new Float32Array(COUNT); // velocidade para a frente
    const vy = new Float32Array(COUNT); // velocidade de queda
    const falling = new Uint8Array(COUNT);
    const wobble = new Float32Array(COUNT);

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const spawn = (i: number, initial: boolean) => {
      const i3 = i * 3;
      positions[i3] = rand(-SPREAD_X / 2, SPREAD_X / 2);
      positions[i3 + 1] = rand(-0.12, 0.14);
      positions[i3 + 2] = initial
        ? rand(Z_START, Z_EDGE)
        : rand(Z_START, Z_START + 5);
      vz[i] = rand(2.0, 4.6);
      vy[i] = 0;
      falling[i] = 0;
      wobble[i] = Math.random() * Math.PI * 2;
      sizes[i] = rand(9, 30);
      bright[i] = rand(0.35, 1);
    };

    for (let i = 0; i < COUNT; i++) spawn(i, true);

    const geometry = new THREE.BufferGeometry();
    const positionAttr = new THREE.BufferAttribute(positions, 3);
    geometry.setAttribute("position", positionAttr);
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("aBright", new THREE.BufferAttribute(bright, 1));

    const energyUniform = { value: 0 };
    const hazeEnergyUniform = { value: 0 };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uEnergy: energyUniform,
        uCore: { value: new THREE.Color("#fff3c4") },
        uGold: { value: new THREE.Color("#e8b53c") },
        uDeep: { value: new THREE.Color("#8a5a12") },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aBright;
        varying float vBright;
        varying float vDepth;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vDepth = clamp((mv.z + 22.0) / 26.0, 0.0, 1.0);
          vBright = aBright;
          gl_PointSize = aSize * (1.0 / max(-mv.z, 0.001)) * 9.0;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform float uEnergy;
        uniform vec3 uCore;
        uniform vec3 uGold;
        uniform vec3 uDeep;
        varying float vBright;
        varying float vDepth;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float core = smoothstep(0.5, 0.0, d);
          float halo = pow(core, 3.0);
          vec3 col = mix(uDeep, uGold, vDepth);
          col = mix(col, uCore, halo * (0.55 + 0.45 * uEnergy));
          float alpha = core * core * (0.20 + 0.80 * vBright) * (0.45 + 0.55 * vDepth);
          alpha *= (1.0 + 0.9 * uEnergy);
          gl_FragColor = vec4(col * (1.0 + 0.8 * uEnergy), alpha);
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // névoa dourada suave onde o fluxo curva para a queda
    const hazeGeo = new THREE.PlaneGeometry(SPREAD_X * 1.4, 4.5);
    const hazeMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uEnergy: hazeEnergyUniform },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform float uEnergy;
        varying vec2 vUv;
        void main() {
          float r = length((vUv - vec2(0.5, 0.62)) * vec2(1.1, 2.0));
          float a = smoothstep(0.62, 0.0, r) * (0.16 + 0.22 * uEnergy);
          gl_FragColor = vec4(vec3(0.92, 0.68, 0.24) * (1.0 + uEnergy), a);
        }
      `,
    });
    const haze = new THREE.Mesh(hazeGeo, hazeMat);
    haze.position.set(0, -1.0, Z_EDGE - 0.5);
    scene.add(haze);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    let raf = 0;
    let last = performance.now();
    let running = true;
    const onVisibility = () => {
      running = !document.hidden;
      last = performance.now();
      if (running) raf = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVisibility);

    let energy = 0;

    function tick(now: number) {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const t = now / 1000;

      const target = energyRef.current;
      energy += (target - energy) * Math.min(dt * 4.5, 1);
      energyUniform.value = energy;
      hazeEnergyUniform.value = energy;

      const speed = reduceMotion ? 0.25 : 1 + energy * 0.9;

      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;
        const px = positions[i3] as number;
        const py = positions[i3 + 1] as number;
        const pz = positions[i3 + 2] as number;
        const w = wobble[i] as number;

        if (!falling[i]) {
          const nz = pz + (vz[i] as number) * speed * dt;
          positions[i3 + 2] = nz;
          positions[i3 + 1] = py + Math.sin(t * 1.6 + w) * 0.06 * dt;
          if (nz >= Z_EDGE) {
            falling[i] = 1;
            vy[i] = 0.15;
          }
        } else {
          // arco suave de ~90deg: velocidade para a frente decai enquanto a gravidade cresce
          const nvz = (vz[i] as number) * (1 - Math.min(dt * 3.4, 0.9));
          const nvy = (vy[i] as number) + (5.2 + (i % 7) * 0.35) * dt;
          vz[i] = nvz;
          vy[i] = nvy;
          positions[i3 + 2] = pz + nvz * speed * dt;
          const ny = py - nvy * speed * dt;
          positions[i3 + 1] = ny;
          positions[i3] = px + Math.sin(t * 2.3 + w) * 0.25 * dt;
          if (ny < -7.5) spawn(i, false);
        }
      }

      positionAttr.needsUpdate = true;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      hazeGeo.dispose();
      hazeMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount)
        mount.removeChild(renderer.domElement);
    };
  }, [energyRef]);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
