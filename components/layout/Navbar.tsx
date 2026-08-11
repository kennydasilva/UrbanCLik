"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/site";

interface NavbarProps {
  className?: string;
  onOpenContact?: () => void;
}

export function Navbar({ className, onOpenContact }: NavbarProps) {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "hidden items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-2 sm:py-2.5 lg:flex",
        className,
      )}
      aria-label="Navegação principal"
    >
      {NAV_LINKS.map((link) => {
        // Se for "Sobre" - faz scroll suave para a seção
        if (link.label === "Sobre") {
          const sectionId = link.href.replace("#", "");
          return (
            <button
              key={link.href}
              type="button"
              onClick={() => handleScrollToSection(sectionId)}
              className="rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base font-medium text-paper/90 transition-colors duration-200 hover:bg-gold-400/10 hover:text-gold-300"
            >
              {link.label}
            </button>
          );
        }

        // Se for "Contactos" - usa o botão com onClick
        const isContact = link.href === "#contactos";
        if (isContact && onOpenContact) {
          return (
            <button
              key={link.href}
              type="button"
              onClick={onOpenContact}
              className="rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base font-medium text-paper/90 transition-colors duration-200 hover:bg-gold-400/10 hover:text-gold-300"
            >
              {link.label}
            </button>
          );
        }

        // Para outros links com hash (Início, Serviços, Diferenciais)
        if (link.href.startsWith("#")) {
          const sectionId = link.href.replace("#", "");
          return (
            <button
              key={link.href}
              type="button"
              onClick={() => handleScrollToSection(sectionId)}
              className="rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base font-medium text-paper/90 transition-colors duration-200 hover:bg-gold-400/10 hover:text-gold-300"
            >
              {link.label}
            </button>
          );
        }

        // Links externos ou de navegação normal
        return (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base font-medium text-paper/90 transition-colors duration-200 hover:bg-gold-400/10 hover:text-gold-300"
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}