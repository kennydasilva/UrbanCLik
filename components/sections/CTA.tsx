"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export function CTA() {
  return (
    <section className="relative bg-ink-500 py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 sm:gap-8 rounded-2xl sm:rounded-[2rem] border border-paper/10 bg-ink-400/50 p-5 sm:p-8 lg:p-12 sm:flex-row sm:items-center"
        >
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-paper">
              Pronto para transformar a sua marca?
            </h2>
            <p className="max-w-md text-xs sm:text-sm lg:text-base leading-relaxed text-paper/60">
              Fale connosco e vamos construir, juntos, a próxima etapa do
              crescimento do seu negócio.
            </p>
          </div>

          <Button asChild variant="primary" size="lg" className="w-full sm:w-fit">
            <a href="#contactos" className="inline-flex items-center gap-2">
              Solicitar orçamento
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.2} />
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}