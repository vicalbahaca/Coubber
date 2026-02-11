import { z } from "zod";

export const demoRequestSchema = z.object({
  firstName: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("Introduce un email válido"),
  organization: z.string().min(1, "La organización es obligatoria"),
  role: z
    .enum(["Preparador físico", "Equipo médico", "Director/Analista", "Otro"])
    .optional(),
  sport: z.string().optional(),
  athleteCount: z
    .enum(["1-20", "21-50", "51-100", "100+"])
    .optional(),
  heardFrom: z
    .enum([
      "Recomendación",
      "Conferencia/Evento",
      "LinkedIn",
      "Google/Búsqueda",
      "Podcast/Newsletter",
      "Otro",
    ])
    .optional(),
  message: z.string().max(2000).optional(),
});

export type DemoRequestInput = z.infer<typeof demoRequestSchema>;
