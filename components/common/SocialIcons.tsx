import { Instagram, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/351210000000", icon: MessageCircle },
  { label: "Email", href: "mailto:contacto.urbanclick@gmail.com", icon: Mail },
];

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export function SocialIcons({ className, iconClassName }: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-ink-500/15 text-ink-500 transition-colors duration-200 hover:border-gold-500 hover:bg-gold-100 hover:text-gold-800",
            iconClassName,
          )}
        >
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}