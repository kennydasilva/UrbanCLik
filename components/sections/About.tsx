"use client";

import { Container } from "@/components/common/Container";

const STATS = [
  { value: "20+", label: "Serviços Especializados" },
  { value: "10+", label: "Projetos Realizados" },
  { value: "100%", label: "Foco no Cliente" },
];

const PILLARS = [
  "Marketing & Branding",
  "Produção de Conteúdo",
  "Design & Comunicação Visual",
  "Gestão de Redes Sociais",
];

export function About() {
  return (
    <section id="sobre" className="relative bg-ink-500 py-14 sm:py-20 scroll-mt-20">
      <Container className="mx-auto flex max-w-5xl flex-col gap-10">
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Sobre nós
          </p>
          <h2 className="mt-2 font-display text-3xl leading-[1.05] tracking-tight text-paper sm:text-4xl">
            We Create, <span className="text-gold-400">You Grow</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-paper/60 sm:text-base">
            Antes de desenvolver qualquer projeto, analisamos o negócio, o
            mercado e os objetivos do cliente para criar soluções alinhadas às
            suas necessidades.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-3 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-paper/10 bg-paper/5 px-5 py-4 transition-colors hover:border-gold-400/30 hover:bg-paper/10"
            >
              <p className="font-display text-3xl font-bold text-gold-400">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-paper/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bloco de destaque - dourado com texto escuro */}
        <div className="relative overflow-hidden rounded-2xl bg-gold-gradient p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-glow-gold opacity-70" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ink-500/60">
                Agência de Marketing e Comunicação
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-ink-500 sm:text-3xl">
                Construímos marcas,
                <br />
                criamos resultados
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500/70">
                Não somos apenas uma agência de marketing. Construímos marcas,
                desenvolvemos campanhas e criamos soluções personalizadas para
                impulsionar o crescimento dos nossos clientes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-center gap-2.5 rounded-lg bg-ink-500/10 px-3.5 py-2.5 backdrop-blur-sm transition-colors hover:bg-ink-500/20"
                >
                  <div className="h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                  <span className="text-xs font-medium text-ink-500 sm:text-sm">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-display text-lg font-bold text-paper sm:text-xl">
            Com o nosso método,{" "}
            <span className="text-gold-400">
              transformamos ideias em resultados
            </span>
          </p>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-ink-500 transition-colors hover:bg-gold-500"
          >
            Conheça os nossos serviços
          </a>
        </div>
      </Container>
    </section>
  );
}