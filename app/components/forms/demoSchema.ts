import { z } from "zod";

export const demoRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  organization: z.string().min(1, "Organization is required"),
  role: z.enum(["Performance Coach", "Medical Staff", "Director/Analyst", "Other"]).optional(),
  sport: z.string().optional(),
  athleteCount: z
    .enum(["1-20", "21-50", "51-100", "100+"])
    .optional(),
  heardFrom: z
    .enum([
      "Referral",
      "Conference/Event",
      "LinkedIn",
      "Google/Search",
      "Podcast/Newsletter",
      "Other",
    ])
    .optional(),
  message: z.string().max(2000).optional(),
});

export type DemoRequestInput = z.infer<typeof demoRequestSchema>;

