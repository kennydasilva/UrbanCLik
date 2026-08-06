"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="relative bg-ink-500 pt-2 pb-10 sm:pt-4 sm:pb-16">
      <Container className="flex flex-col gap-4 sm:gap-6">
        <SectionTitle
          title={
            <span className="uppercase text-5xl sm:text-6xl lg:text-7xl">
              SERVIÇOS
            </span>
          }
          description={
            <>
              Na <span className="text-gold-400">UrbanClick</span>, cada projeto é
              desenvolvido com foco na{" "}
              <span className="text-gold-400">
                inovação, qualidade e resultados
              </span>
              .
            </>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const featured = index === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className={cn(
                  "relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1",
                  featured
                    ? "bg-paper text-ink-500"
                    : "bg-gold-gradient text-paper",
                )}
              >
                {!featured && (
                  <div className="pointer-events-none absolute inset-0 bg-glow-gold opacity-70" />
                )}

                <span
                  className={cn(
                    "relative z-10 font-display text-6xl font-bold sm:text-7xl",
                    featured ? "text-gold-500" : "text-paper opacity-90",
                  )}
                >
                  {service.number}
                </span>

                <h3 className="relative z-10 font-display text-xl font-semibold uppercase leading-snug tracking-tight">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-gold-400 via-paper/10 to-transparent" />
      </Container>
    </section>
  );
}