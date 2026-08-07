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
    <section className="relative bg-ink-500 py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* Título - responsivo */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-paper"
        >
          <span className="text-gold-400">Projetos</span> que falam por si só
        </motion.h2>

        {/* Grid de projetos - responsivo */}
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
              {project.showButton && (
                <div className="absolute inset-x-0 bottom-4 flex justify-center sm:bottom-6 lg:bottom-8">
                  <Button asChild variant="gold" size="sm">
                    <a
                      href="/PORTIFOLIO-ATUALIZADO.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm"
                    >
                      <Download className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={2} />
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