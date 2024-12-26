import { Express } from "express";
import jobRoutes from "infrastructure/api/routes/jobRoutes";
import healthRoutes from "./routes/healthRoutes";

export function configureRoutes(app: Express): void {
  app.use("/api/jobs", jobRoutes);
  app.use("/api", healthRoutes);
}
