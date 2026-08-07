"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { DIFFERENTIALS } from "@/data/differentials";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "#0D0C05" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-[92%] sm:w-[90%] max-w-[1600px] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem]"
          style={{
            minHeight: "auto",
            padding: "clamp(24px, 4vw, 40px) clamp(16px, 3vw, 60px)",
            background: "linear-gradient(180deg, #FFF6CC 0%, #FEE266 100%)",
          }}
        >
          {/* Título - responsivo com clamp */}
          <h2 className="relative font-display leading-[1.05] tracking-tight text-black">
            <span 
              className="block"
              style={{ 
                fontSize: "clamp(36px, 5vw, 56px)", 
                fontWeight: 700 
              }}
            >
              Nossos
            </span>
            <span 
              className="block"
              style={{ 
                fontSize: "clamp(40px, 6vw, 64px)", 
                fontWeight: 700 
              }}
            >
              diferenciais
            </span>
          </h2>

          {/* Grid - responsivo */}
          <div
            className="relative mt-6 sm:mt-[30px] grid gap-6 sm:gap-[30px] lg:gap-[50px] lg:grid-cols-2"
          >
            {/* Coluna 1 - Primeiros 2 items */}
            <div className="flex flex-col gap-6 sm:gap-[30px] lg:gap-[50px]">
              {DIFFERENTIALS.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-start"
                  style={{ columnGap: "12px" }}
                >
                  <span
                    className="shrink-0 font-display leading-none"
                    style={{
                      color: "#4A3F1A",
                      fontSize: "clamp(72px, 9vw, 110px)",
                      fontWeight: 700,
                    }}
                  >
                    {item.number}
                  </span>
                  <div className="flex flex-col pt-1 sm:pt-2">
                    <h3
                      className="font-display"
                      style={{
                        color: "#000000",
                        fontSize: "clamp(18px, 2vw, 24px)",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 sm:mt-2 max-w-xl"
                      style={{
                        color: "#444444",
                        fontSize: "clamp(12px, 1.2vw, 14px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coluna 2 - Últimos 2 items */}
            <div className="flex flex-col gap-6 sm:gap-[30px] lg:gap-[50px]">
              {DIFFERENTIALS.slice(2, 4).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (index + 2) * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-start"
                  style={{ columnGap: "12px" }}
                >
                  <span
                    className="shrink-0 font-display leading-none"
                    style={{
                      color: "#4A3F1A",
                      fontSize: "clamp(72px, 9vw, 110px)",
                      fontWeight: 700,
                    }}
                  >
                    {item.number}
                  </span>
                  <div className="flex flex-col pt-1 sm:pt-2">
                    <h3
                      className="font-display"
                      style={{
                        color: "#000000",
                        fontSize: "clamp(18px, 2vw, 24px)",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 sm:mt-2 max-w-xl"
                      style={{
                        color: "#444444",
                        fontSize: "clamp(12px, 1.2vw, 14px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}