import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface DifferentialItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}
