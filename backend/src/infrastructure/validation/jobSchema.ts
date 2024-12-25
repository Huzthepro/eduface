import { z } from "zod";

export const jobSchema = z.object({
  id: z.string().min(1, "ID is required"),
  title: z
    .string()
    .max(25, "Title must not exceed 25 characters")
    .min(1, "Title is required"),
  company: z
    .string()
    .max(50, "Company name must not exceed 50 characters")
    .min(1, "Company is required"),
  location: z
    .string()
    .max(50, "Location must not exceed 50 characters")
    .min(1, "Location is required"),
});
