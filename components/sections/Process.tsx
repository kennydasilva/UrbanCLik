"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { PROCESS_STEPS } from "@/data/process";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section className="relative bg-ink-500 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-paper sm:text-5xl"
        >
          Com o nosso método, transformamos{" "}
          <span className="text-gold-400">ideias em resultados</span>.
        </motion.h2>

        <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {/* 01 */}
          <ProcessCard step={PROCESS_STEPS[0]} className="lg:col-start-1 lg:row-start-1" />

          {/* 02 - destaque */}
          <ProcessCard
            step={PROCESS_STEPS[1]}
            featured
            className="lg:col-start-2 lg:row-start-1"
          />

          {/* Texto central */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center rounded-2xl p-6 text-paper sm:p-7 lg:col-start-3 lg:row-start-1"
          >
            <p className="text-lg leading-relaxed">
              Transformamos ideias em resultados através de um processo
              estratégico, criativo e orientado para objetivos.
            </p>
          </motion.div>

          {/* 03 */}
          <ProcessCard step={PROCESS_STEPS[2]} className="lg:col-start-4 lg:row-start-1" />

          {/* 05 */}
          <ProcessCard step={PROCESS_STEPS[4]} className="lg:col-start-3 lg:row-start-2" />

          {/* 04 */}
          <ProcessCard step={PROCESS_STEPS[3]} className="lg:col-start-4 lg:row-start-2" />
        </div>
      </Container>
    </section>
  );
}

interface ProcessCardProps {
  step: (typeof PROCESS_STEPS)[number];
  featured?: boolean;
  className?: string;
}

function ProcessCard({ step, featured = false, className }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative flex min-h-[220px] flex-col justify-center gap-3 overflow-hidden rounded-2xl p-6 sm:p-7",
        featured ? "bg-paper text-ink-500" : "bg-gold-gradient text-paper",
        className,
      )}
    >
      {!featured && (
        <div className="pointer-events-none absolute inset-0 bg-glow-gold opacity-70" />
      )}

      <span
        className={cn(
          "relative z-10 font-display text-6xl font-medium",
          featured ? "text-gold-500" : "text-paper opacity-90",
        )}
      >
        {step.number}
      </span>

      <div className="relative z-10 flex flex-col gap-2">
        <h3
          className={cn(
            "font-display text-lg font-semibold uppercase leading-snug tracking-tight",
            featured && "text-gold-500",
          )}
        >
          {step.title}
        </h3>
        <p
          className={cn(
            "text-sm leading-relaxed",
            featured ? "text-ink-500/70" : "text-paper/70",
          )}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}