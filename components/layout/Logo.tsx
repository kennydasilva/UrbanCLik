import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className }: LogoProps) {
  const src =
    tone === "light"
      ? "/images/LOGO-H3-BRANCA.png"
      : "/images/LOGO-V1.png";

  return (
    <Image
      src={src}
      alt="UrbanClick"
      width={1080}
      height={1080}
      priority
      className={cn("h-28 w-auto select-none sm:h-36 md:h-44 lg:h-56", className)}
    />
  );
}