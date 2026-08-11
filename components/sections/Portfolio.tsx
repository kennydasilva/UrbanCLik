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
  },
  {
    id: "mozambique",
    src: "/images/BANNER-MOCKUP.png",
    alt: "Projeto Moçambique · 2026",
  },
  {
    id: "bestfy",
    src: "/images/HALL-3.jpg",
    alt: "Bestfy Investimentos, Lda.",
  },
  {
    id: "ht-seguranca",
    src: "/images/CORTA-VENTO.jpg",
    alt: "HT Segurança",
  },
];

export function Portfolio() {
  return (
    <section className="relative bg-ink-500 py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-paper"
        >
          <span className="text-gold-400">Projetos</span> que falam por si só
        </motion.h2>

        {/* Grid de projetos - 2 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </motion.div>
          ))}
        </div>

        {/* 🔥 BOTÃO CENTRALIZADO NO FINAL DA SEÇÃO */}
        <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8">
          <Button asChild variant="gold" size="lg">
            <a
              href="/PORTIFOLIO-ATUALIZADO.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
              Baixar portfólio
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}