"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IntroScene } from "@/components/sections/IntroScene";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Differentials } from "@/components/sections/Differentials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactModal } from "@/components/common/ContactModal";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setContactOpen(true)} />
      <main>
        <IntroScene />
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Differentials />
        <FAQ />
      </main>
      <Footer onOpenContact={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
