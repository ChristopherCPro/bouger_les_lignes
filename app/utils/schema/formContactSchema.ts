import { z } from "zod";

export const formContactSchema = z.object({
  firstname: z.string().min(1, "Le prénom est requis").trim(),
  lastname: z.string().min(1, "Le nom est requis").trim(),
  email: z.email("L'adresse mail n'est pas valide"),
  phone: z
    .string()
    .min(10, "Le numéro de téléphone doit avoir 10 chiffres")
    .max(10, "Le numéro de téléphone doit avoir 10 chiffres"),
  message: z.string(),
});

export type formContactData = z.infer<typeof formContactSchema>;
