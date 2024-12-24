import express from "express";
import cors from "cors";
import { connectDatabase } from "./infrastructure/database";
import { configureRoutes } from "./infrastructure/api";
import {
  errorHandler,
  notFoundHandler,
} from "./infrastructure/api/middlewares/error-handler";
import { initializeAdapters } from "./infrastructure/adapters/job-application/adapters.di";
import { validateEnv } from "./infrastructure/validation/envValidation";

const app = express();

app.use(cors());
app.use(express.json());
// Validate environment variables
validateEnv(); // Call validation before connecting to the database

// Initialize database and adapters
(async () => {
  try {
    const database = await connectDatabase();

    // Initialize adapters with database
    await initializeAdapters(database); // Pass the database dependency
  } catch (error) {
    console.error("❌ Failed to connect database:");
    console.error(error);
    console.warn("⚠️ Continuing without database...");
  }
})();
// Configure routes
configureRoutes(app);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
