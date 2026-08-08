"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";

const STATS = [
  {
    value: "20+",
    label: "Serviços",
    description: "Mais de 20 serviços disponibilizados.",
  },
  {
    value: "10+",
    label: "Projectos",
    description: "Mais de 10 marcas construídas.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export function Contact() {
  return (
    <section
      id="contactos"
      className="relative isolate overflow-hidden bg-ink-500 py-16 sm:py-20 lg:py-28 xl:py-36"
    >
      {/* Ambient golden glow behind the central cursor - responsivo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-gold blur-3xl sm:h-[560px] sm:w-[560px] md:h-[620px] md:w-[620px] lg:h-[760px] lg:w-[760px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.03]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-10 sm:gap-12 md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)] lg:gap-12 xl:gap-20">
          {/* Left column — title, description and stats */}
          <motion.div {...fadeUp} className="flex flex-col items-center gap-5 sm:gap-6 text-center lg:items-start lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-[0.95] tracking-tight text-paper">
              We Create
              <br />
              <span className="bg-gold-gradient bg-clip-text text-transparent">You Grow</span>
            </h2>

            <p className="max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-paper/65">
              Antes de desenvolver qualquer projecto, analisamos o negócio, o
              mercado e os objectivos do cliente para criar soluções alinhadas
              às suas necessidades.
            </p>

            <div className="mt-2 grid w-full max-w-md grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1.5 sm:gap-2 rounded-2xl border border-paper/10 bg-ink-400/40 p-4 sm:p-5 text-center transition-colors duration-300 hover:border-gold-400/40 lg:text-left"
                >
                  <p className="font-display text-3xl sm:text-4xl font-bold text-gold-400">{stat.value}</p>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-paper">
                    {stat.label}
                  </p>
                  <p className="text-[10px] sm:text-xs leading-relaxed text-paper/55">{stat.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center column — golden cursor with glassmorphism and glow - responsivo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto flex h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-[22rem] lg:w-[22rem] items-center justify-center"
            aria-hidden="true"
          >
            {/* Intense golden glow - responsivo */}
            <div className="absolute inset-6 sm:inset-8 md:inset-10 animate-pulse rounded-full bg-gold-400/30 blur-3xl" />

            {/* Glass ring with 3D depth */}
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-gold-300/25 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-3 sm:inset-4 rounded-full bg-glow-gold opacity-70 blur-md" />
              <div className="pointer-events-none absolute inset-x-0 top-4 sm:top-6 mx-auto h-12 sm:h-16 w-32 sm:w-48 rounded-[100%] bg-gold-300/25 blur-2xl" />

              <svg
                viewBox="0 0 200 220"
                className="animate-spin-slow relative h-32 w-28 sm:h-44 sm:w-40 md:h-48 md:w-44 lg:h-56 lg:w-52 drop-shadow-[0_0_35px_rgba(241,206,61,0.55)]"
                fill="none"
              >
                <defs>
                  <linearGradient id="contactCursorGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FBEDA0" />
                    <stop offset="55%" stopColor="#F1CE3D" />
                    <stop offset="100%" stopColor="#C6931A" />
                  </linearGradient>
                </defs>
                <circle cx="42" cy="38" r="26" fill="url(#contactCursorGradient)" />
                <path
                  d="M60 70 L170 190 L120 175 L95 215 Z"
                  fill="url(#contactCursorGradient)"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right column — agency title and description */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="flex flex-col items-center gap-5 sm:gap-6 text-center lg:items-start lg:text-left"
          >
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold uppercase leading-tight tracking-tight text-paper">
              Agência de Marketing
              <br />
              e Comunicação
            </h3>

            <p className="max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-paper/65">
              Não somos apenas uma agência de marketing. Construímos marcas,
              desenvolvemos estratégias e criamos soluções personalizadas para
              impulsionar o crescimento dos nossos clientes.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}