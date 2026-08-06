"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export function CTA() {
  return (
    <section className="relative bg-ink-500 py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-paper/10 bg-ink-400/50 p-8 sm:flex-row sm:items-center sm:p-12"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-3xl leading-tight tracking-tight text-paper sm:text-4xl">
              Pronto para transformar a sua marca?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-paper/60 sm:text-base">
              Fale connosco e vamos construir, juntos, a próxima etapa do
              crescimento do seu negócio.
            </p>
          </div>

          <Button asChild variant="primary" size="lg" className="w-full sm:w-fit">
            <a href="#contactos">
              Solicitar orçamento
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
