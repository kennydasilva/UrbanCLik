"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Card } from "@/components/common/Card";

const STATS = [
  {
    value: "20+",
    label: "Serviços",
    description: "Mais de 20 serviços que a agência disponibiliza. Tudo para se enquadrar na sua marca.",
  },
  {
    value: "10+",
    label: "Projetos",
    description: "Mais de 10 marcas construídas ao longo do nosso caminho.",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-ink-600 pb-32 pt-52 sm:pt-60 lg:pb-44 lg:pt-72"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[48%] -z-10 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 sm:h-[880px] sm:w-[880px]"
        style={{
          background:
            "radial-gradient(52% 52% at 50% 45%, rgba(241, 206, 61, 0.55) 0%, rgba(231, 184, 36, 0.22) 45%, rgba(198, 147, 26, 0.06) 72%, rgba(11, 10, 6, 0) 86%)",
          filter: "blur(4px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.03]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-start lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-start gap-6"
          >
            <h1 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-4xl lg:text-[2.75rem]">
              <span className="whitespace-nowrap">We Create</span>
              <br />
              <span className="whitespace-nowrap">You Grow</span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-paper/70 sm:text-lg">
              Antes de desenvolver qualquer projeto, analisamos o negócio, o
              mercado e os objetivos do cliente para criar soluções alinhadas
              às suas necessidades.
            </p>

            <div className="mt-2 grid max-w-md grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <Card
                  key={stat.label}
                  tone="light"
                  className="!rounded-3xl !border-white/80 !bg-white !p-5 shadow-[0_12px_34px_-18px_rgba(0,0,0,0.55)]"
                >
                  <p className="font-display text-4xl font-bold leading-none text-gold-600">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-ink-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-500/65">
                    {stat.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto mt-10 flex items-start justify-start lg:mx-0 lg:mt-0 lg:-ml-20 xl:-ml-28"
          >
            <div className="animate-float relative h-[220px] w-[220px] sm:h-[360px] sm:w-[360px] lg:h-[460px] lg:w-[460px]">
              <Image
                src="/images/IMG_7477.PNG"
                alt="Cursor dourado 3D — símbolo UrbanClick"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 540px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="-mt-2 flex flex-col items-end gap-6 text-right sm:-mt-4 lg:-mt-10"
        >
          <h2 className="font-display text-3xl font-bold uppercase leading-[1] tracking-tight text-paper sm:text-4xl lg:text-[3rem]">
            Agência de
            <br />
            Marketing e
            <br />
            Comunicação
          </h2>

          <p className="max-w-sm text-base leading-relaxed text-paper/75 sm:text-lg">
            Não somos apenas uma agência de marketing. Construímos marcas,
            desenvolvemos estratégias e criamos soluções personalizadas para
            impulsionar o crescimento dos nossos clientes.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
