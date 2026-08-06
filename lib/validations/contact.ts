import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(80, "O nome é demasiado longo."),
  email: z.string().email("Introduza um email válido."),
  phone: z
    .string()
    .min(9, "Introduza um número de telefone válido.")
    .max(20, "O número de telefone é demasiado longo."),
  company: z.string().max(100, "O nome da empresa é demasiado longo.").optional(),
  message: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(1000, "A mensagem é demasiado longa."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
