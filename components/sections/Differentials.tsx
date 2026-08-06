"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { DIFFERENTIALS } from "@/data/differentials";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-20 sm:py-28"
      style={{ backgroundColor: "#0D0C05" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-[90%] max-w-[1600px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
          style={{
            minHeight: "80vh",
            padding: "clamp(40px,5vw,60px)",
            background: "linear-gradient(180deg, #FFF6CC 0%, #FEE266 100%)",
          }}
        >
          <h2 className="relative font-display leading-[1.05] tracking-tight text-black">
            <span style={{ fontSize: "clamp(56px, 6vw, 72px)", fontWeight: 700 }}>
              Nossos
            </span>
            <br />
            <span style={{ fontSize: "clamp(64px, 7vw, 84px)", fontWeight: 700 }}>
              diferenciais
            </span>
          </h2>

          <div
            className="relative mt-[30px] grid gap-[50px] lg:grid-cols-2"
          >
            <div className="flex flex-col gap-[50px]">
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
                  style={{ columnGap: "20px" }}
                >
                  <span
                    className="shrink-0 font-display leading-none"
                    style={{
                      color: "#4A3F1A",
                      fontSize: "clamp(110px, 11vw, 140px)",
                      fontWeight: 700,
                    }}
                  >
                    {item.number}
                  </span>
                  <div className="flex flex-col pt-2">
                    <h3
                      className="font-display"
                      style={{
                        color: "#000000",
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 max-w-xl"
                      style={{
                        color: "#444444",
                        fontSize: "14px",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-[50px]">
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
                  style={{ columnGap: "20px" }}
                >
                  <span
                    className="shrink-0 font-display leading-none"
                    style={{
                      color: "#4A3F1A",
                      fontSize: "clamp(110px, 11vw, 140px)",
                      fontWeight: 700,
                    }}
                  >
                    {item.number}
                  </span>
                  <div className="flex flex-col pt-2">
                    <h3
                      className="font-display"
                      style={{
                        color: "#000000",
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 max-w-xl"
                      style={{
                        color: "#444444",
                        fontSize: "14px",
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