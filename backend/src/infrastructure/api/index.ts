import { Express } from "express";
import applicationRoutes from "./routes/applicationRoutes";

export function configureRoutes(app: Express): void {
  app.use("/api/applications", applicationRoutes);
}
