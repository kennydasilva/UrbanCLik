"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";

const GoldParticleFlow = dynamic(
  () => import("@/components/intro/GoldParticleFlow"),
  { ssr: false },
);

type Phase = "idle" | "moving" | "clicking" | "glowing";

const IDLE_OFFSET = { x: 170, y: 130 };

export function IntroScene() {
  const energyRef = useRef(0);
  const [phase, setPhase] = useState<Phase>("idle");

  const sceneRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLSpanElement>(null);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function measure() {
      const scene = sceneRef.current;
      const target = targetRef.current;
      if (!scene || !target) return;
      const sceneBox = scene.getBoundingClientRect();
      const targetBox = target.getBoundingClientRect();
      setTargetPos({
        x: targetBox.left + targetBox.width / 2 - sceneBox.left,
        y: targetBox.top + targetBox.height / 2 - sceneBox.top,
      });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setPhase("idle");
      timers.push(
        setTimeout(() => setPhase("moving"), 500),
        setTimeout(() => setPhase("clicking"), 2100),
        setTimeout(() => {
          setPhase("glowing");
          energyRef.current = 1;
        }, 2350),
        setTimeout(() => {
          energyRef.current = 0;
        }, 3300),
        setTimeout(() => {
          timers = [];
          run();
        }, 4600),
      );
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  const clicked = phase === "clicking" || phase === "glowing";
  const arrived = phase !== "idle";

  const cursorX = arrived ? targetPos.x : targetPos.x + IDLE_OFFSET.x;
  const cursorY = arrived ? targetPos.y : targetPos.y + IDLE_OFFSET.y;

  return (
    <section
      ref={sceneRef}
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink-600"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%]">
        <GoldParticleFlow energyRef={energyRef} />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1
          className={`font-display text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl ${
            clicked ? "logo-glow-on" : "logo-glow-off"
          }`}
        >
          <span className="text-paper">Urban</span>
          <span ref={targetRef} className="inline-block text-gold-shine">
            Click
          </span>
        </h1>
      </div>

      <div
        className={`gold-cursor absolute left-0 top-0 z-20 ${clicked ? "gold-cursor-press" : ""}`}
        style={{
          transform: `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${clicked ? 0.82 : 1})`,
          opacity: targetPos.x ? 1 : 0,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width="34" height="34">
          <path
            d="M5 2.5 20 12.2l-6.6 1.2 3 6.2-2.7 1.3-3-6.2L7 19.4z"
            fill="#FBEDA0"
            stroke="#9C6E17"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className={`gold-cursor-ring ${clicked ? "gold-cursor-ring-on" : ""}`}
        />
      </div>

      <div
        className="animate-float pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-paper/40"
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
