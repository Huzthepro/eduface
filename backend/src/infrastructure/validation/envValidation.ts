import { z } from "zod";

// Environment Variables Schema
const envSchema = z.object({
  DB_HOST: z.string().min(1, "DB_HOST is required"),
  DB_USER: z.string().min(1, "DB_USER is required"),
  DB_PASSWORD: z.string().min(1, "DB_PASSWORD is required"),
  DB_NAME: z.string().min(1, "DB_NAME is required"),
  PORT: z.string().min(1, "DB_PORT is required"),
});

// Validate Environment Variables
export const validateEnv = () => {
  try {
    envSchema.parse({
      DB_HOST: process.env.DB_HOST,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
      PORT: process.env.PORT,
    });
    console.log("✅ Environment variables exist!");
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Log each custom error message
      error.errors.forEach((err) => {
        console.error(err.path.join("."), err.message); // Custom error message
      });
    } else {
      console.error(
        "❌ An unknown error occurred during environment variable validation:",
        error
      );
    }
  }
};
