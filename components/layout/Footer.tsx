"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SocialIcons } from "@/components/common/SocialIcons";
import { Button } from "@/components/common/Button";
import { QuoteModal } from "@/components/common/QuoteModal";
import { FOOTER_LINKS } from "@/constants/site";

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <footer className="rounded-t-[2.5rem] bg-paper text-ink-500 sm:rounded-t-[3.5rem]">
      <Container className="flex flex-col gap-8 py-8 sm:py-10 px-5 sm:px-6 lg:px-8">
        {/* Grid principal - responsivo */}
        <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-12 lg:items-center">

          {/* Coluna 1: Logo + Social + Email */}
          <div className="flex flex-col items-start gap-5 lg:-ml-14">
            <Image
              src="/images/LOGO-V1.png"
              alt="UrbanClick"
              width={1080}
              height={1080}
              priority
              className="h-32 w-auto select-none sm:h-40 lg:h-52"
            />
            <SocialIcons />
            <a
              href="mailto:contacto.urbanclick@gmail.com"
              className="flex items-center gap-2 text-sm font-medium text-ink-500/80 transition-colors hover:text-gold-700"
            >
              <Mail className="h-4 w-4" strokeWidth={1.8} />
              contacto.urbanclick@gmail.com
            </a>
          </div>

          {/* Coluna 2: Slogan "We Create You Grow" */}
          <div className="flex items-center justify-center py-4">
            <p className="font-display text-4xl leading-[1.05] tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl">
              We Create
              <br />
              You Grow
            </p>
          </div>

          {/* Coluna 3: Links de navegação */}
          <nav
            className="flex flex-col gap-2 text-base font-medium text-ink-500/80"
            aria-label="Navegação do rodapé"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gold-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Coluna 4: Botões */}
          <div className="flex flex-col gap-3 w-full sm:w-fit lg:-mr-14">
            <Button
              type="button"
              size="sm"
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto !bg-gold-500 !text-ink-500 hover:!bg-gold-600"
            >
              Solicitar Orçamento
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={onOpenContact}
              className="w-full sm:w-auto !bg-gold-500 !text-ink-500 hover:!bg-gold-600"
            >
              Contactos
            </Button>
          </div>
        </div>
      </Container>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </footer>
  );
}