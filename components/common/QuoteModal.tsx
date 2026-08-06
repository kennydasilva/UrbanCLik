"use client";

import { useState } from "react";
import { X, Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT = {
  email: "contacto.urbanclick@gmail.com",
  phones: ["+258 86 632 8284", "+258 84 219 6569"],
  address: "Rua 24 de Julho, Q 25, Nº 131, Cidade da Matola",
};

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-500/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-paper shadow-2xl"
      >
        {/* Cabeçalho dourado */}
        <div className="relative bg-gold-gradient px-8 py-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-glow-gold opacity-70" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-ink-500/20 p-2 text-paper transition-colors hover:bg-ink-500/40"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>

          <div className="relative z-10">
            <p className="font-display text-2xl font-bold uppercase tracking-tight text-ink-500 sm:text-3xl">
              Urban Click
            </p>
            <p className="mt-1 text-sm font-medium text-ink-500/70">
              Agência de Marketing e Comunicação
            </p>
          </div>
        </div>

        {/* Corpo */}
        <div className="flex flex-col gap-5 px-8 py-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500/50">
              Solicitar orçamento
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-500/70">
              Envie-nos os detalhes do seu projeto e entraremos em contacto o
              mais brevemente possível.
            </p>
          </div>

          {/* Email destacado com copiar */}
          <div className="flex items-center gap-3 rounded-2xl border border-ink-500/10 bg-ink-500/[0.03] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
              <Mail className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-ink-500/50">Email</p>
              <p className="truncate text-sm font-medium text-ink-500">
                {CONTACT.email}
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-500/50 transition-colors hover:bg-ink-500/10 hover:text-ink-500"
              aria-label="Copiar email"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-600" strokeWidth={2} />
              ) : (
                <Copy className="h-4 w-4" strokeWidth={1.8} />
              )}
            </button>
          </div>

          {/* Telefones */}
          <div className="flex items-center gap-3 rounded-2xl border border-ink-500/10 bg-ink-500/[0.03] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
              <Phone className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-ink-500/50">Telefone</p>
              {CONTACT.phones.map((phone) => (
                <p key={phone} className="text-sm font-medium text-ink-500">
                  {phone}
                </p>
              ))}
            </div>
          </div>

          {/* Morada */}
          <div className="flex items-center gap-3 rounded-2xl border border-ink-500/10 bg-ink-500/[0.03] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
              <MapPin className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-ink-500/50">Morada</p>
              <p className="text-sm font-medium leading-snug text-ink-500">
                {CONTACT.address}
              </p>
            </div>
          </div>

          {/* CTA principal - DOURADO */}
          <a
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
              "Solicitação de Orçamento",
            )}`}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink-500 transition-colors hover:bg-gold-600"
          >
            <Send className="h-4 w-4" strokeWidth={2} />
            Enviar email agora
          </a>
        </div>
      </div>
    </div>
  );
}