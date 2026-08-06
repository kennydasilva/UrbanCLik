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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
            className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-paper/10 bg-ink-500 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-paper/10 px-5 py-4 sm:px-8 sm:py-5">
              <div className="flex flex-col gap-1">
                <p className="font-display text-xl font-semibold text-paper sm:text-2xl">
                  Cartão de Visitas
                </p>
                <a
                  href="mailto:contacto.urbanclick@gmail.com"
                  className="text-sm text-gold-400 transition-colors hover:text-gold-300"
                >
                  contacto.urbanclick@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Button asChild variant="gold" size="sm">
                  <a
                    href="/Cartões de visita.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" strokeWidth={2} />
                    Descarregar
                  </a>
                </Button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-paper/30 hover:text-paper"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="h-[65vh] min-h-[420px] w-full bg-paper">
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
