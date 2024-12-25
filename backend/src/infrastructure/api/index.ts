import { Express } from "express";
import applicationRoutes from "infrastructure/api/routes/applicationRoutes";
import healthRoutes from "./routes/healthRoutes";

export function configureRoutes(app: Express): void {
  app.use("/api/applications", applicationRoutes);
  app.use("/api", healthRoutes);
}
