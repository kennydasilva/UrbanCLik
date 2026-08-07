"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/common/Accordion";
import { FAQS } from "@/data/faq";

export function FAQ() {
  const leftColumn = FAQS.slice(0, Math.ceil(FAQS.length / 2));
  const rightColumn = FAQS.slice(Math.ceil(FAQS.length / 2));

  return (
    <section className="relative bg-ink-500 py-16 sm:py-20 lg:py-28">
      <Container className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* Título - responsivo */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight"
        >
          <span className="text-gold-400">Você</span>{" "}
          <span className="text-paper">pergunta</span>
          <br className="sm:hidden" />
          <span className="text-paper"> — </span>
          <span className="text-gold-400">Nós</span>{" "}
          <span className="text-paper">respondemos</span>
        </motion.h2>

        {/* Grid FAQ - responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <Accordion
              key={columnIndex}
              type="single"
              collapsible
              className="flex flex-col gap-2 sm:gap-3"
            >
              {column.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  );
}