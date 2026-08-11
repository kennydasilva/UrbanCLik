"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";

interface HeaderProps {
  onOpenContact?: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 bg-ink-500/60 backdrop-blur-md">
        <Container className="grid grid-cols-3 items-center gap-4 py-2 sm:py-3">
          {/* Logo - alinhado à esquerda */}
          <a
            href="#inicio"
            aria-label="UrbanClick — Início"
            className="col-start-1 justify-self-start"
          >
            <Logo />
          </a>

          {/* Navbar - centralizado (visível apenas em desktop) */}
          <Navbar
            className="col-start-2 hidden lg:flex justify-self-center"
            onOpenContact={onOpenContact}
          />

          {/* Botão Menu Mobile - visível apenas em mobile/tablet */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            className="col-start-3 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center justify-self-end rounded-full border border-paper/15 text-paper transition-colors hover:border-gold-400 hover:text-gold-300 lg:hidden"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenContact={onOpenContact}
      />
    </>
  );
}
