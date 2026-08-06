"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

const PROJECTS = [
  {
    id: "website",
    src: "/images/WEB-HIGHLIGHTER-MOCKUP.jpg",
    alt: "Website Institucional",
    showButton: false,
  },
  {
    id: "mozambique",
    src: "/images/BANNER-MOCKUP.png",
    alt: "Projeto Moçambique · 2026",
    showButton: false,
  },
  {
    id: "bestfy",
    src: "/images/HALL-3.jpg",
    alt: "Bestfy Investimentos, Lda.",
    showButton: true,
  },
  {
    id: "ht-seguranca",
    src: "/images/CORTA-VENTO.jpg",
    alt: "HT Segurança",
    showButton: false,
  },
];

export function Portfolio() {
  return (
    <section className="relative bg-ink-500 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl"
        >
          <span className="text-gold-400">Projetos</span> que falam por si só
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {project.showButton && (
                <div className="absolute inset-x-0 bottom-6 flex justify-center sm:bottom-8">
                  <Button asChild variant="gold" size="sm">
                    <a
                      href="/PORTIFOLIO-ATUALIZADO.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" strokeWidth={2} />
                      Baixar portfólio
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}