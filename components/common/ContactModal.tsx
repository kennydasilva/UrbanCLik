"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Download } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/common/Button";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-ink-500/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-paper/10 bg-ink-500 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
          >
            {/* Header - responsivo */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-paper/10 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5">
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <p className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-paper">
                  Cartão de Visitas
                </p>
                <a
                  href="mailto:contacto.urbanclick@gmail.com"
                  className="text-xs sm:text-sm text-gold-400 transition-colors hover:text-gold-300"
                >
                  contacto.urbanclick@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button asChild variant="gold" size="sm" className="flex-1 sm:flex-none">
                  <a
                    href="/Cartões de visita.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                  >
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                    Descarregar
                  </a>
                </Button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-paper/30 hover:text-paper"
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Conteúdo do PDF - responsivo */}
            <div className="h-[55vh] sm:h-[60vh] md:h-[65vh] min-h-[300px] sm:min-h-[360px] md:min-h-[420px] w-full bg-paper">
              <iframe
                src="/Cartões de visita.pdf#toolbar=1"
                title="Cartão de Visitas UrbanClick"
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}