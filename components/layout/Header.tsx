"use client";

import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenContact?: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY < 80) {
        // Sempre visível perto do topo
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        // A descer → esconde
        setIsHidden(true);
      } else {
        // A subir → mostra
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-ink-500/90 backdrop-blur-md shadow-lg"
          : "bg-transparent",
        isHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <Container className="grid grid-cols-3 items-center gap-4 py-3">
        <a href="#inicio" aria-label="UrbanClick — Início" className="justify-self-start">
          <Logo />
        </a>

        <Navbar className="justify-self-center" onOpenContact={onOpenContact} />

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu de navegação"
          className="flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-paper/15 text-paper transition-colors hover:border-gold-400 hover:text-gold-300 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenContact={onOpenContact}
      />
    </header>
  );
}