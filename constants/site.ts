// constants/site.ts - Seu arquivo atual ✅
import type { NavLink } from "@/types";

export const SITE = {
  name: "UrbanClick",
  tagline: "WE CREATE. YOU GROW.",
  description:
    "Agência de marketing, branding e comunicação visual. Criamos estratégias e soluções personalizadas para impulsionar o crescimento da sua marca.",
  url: "https://www.urbanclick.pt",
  email: "contacto.urbanclick@gmail.com",
  phone: "+351 21 000 00 00",
  address: "Lisboa, Portugal",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },      // ✅ Aponta para seção About
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contactos", href: "#contactos" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },      // ✅ Aponta para seção About
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contactos", href: "#contactos" },
];