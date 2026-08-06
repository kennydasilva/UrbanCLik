"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { NAV_LINKS } from "@/constants/site";
import { Logo } from "./Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export function MobileMenu({ open, onClose, onOpenContact }: MobileMenuProps) {
  useLockBodyScroll(open);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-ink-500 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex items-center justify-between px-5 py-6">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <motion.nav
            className="flex flex-1 flex-col justify-center gap-2 px-8"
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              closed: {},
            }}
            aria-label="Navegação principal (mobile)"
          >
            {NAV_LINKS.map((link) => {
              const isContact = link.href === "#contactos";
              const handleClick = () => {
                if (isContact && onOpenContact) {
                  onOpenContact();
                }
                onClose();
              };
              if (isContact && onOpenContact) {
                return (
                  <motion.button
                    key={link.href}
                    type="button"
                    onClick={handleClick}
                    className="border-b border-paper/10 py-4 text-left font-display text-3xl text-paper transition-colors hover:text-gold-300"
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 16 },
                    }}
                  >
                    {link.label}
                  </motion.button>
                );
              }
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleClick}
                  className="border-b border-paper/10 py-4 font-display text-3xl text-paper transition-colors hover:text-gold-300"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 16 },
                  }}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
