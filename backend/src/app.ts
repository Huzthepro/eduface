import express from "express";
import cors from "cors";
import { connectDatabase } from "./infrastructure/database";
import { configureRoutes } from "./infrastructure/api";
import {
  errorHandler,
  notFoundHandler,
} from "./infrastructure/api/middlewares/error-handler";
import { initializeAdapters } from "./infrastructure/adapters/adapters.di";

const app = express();

app.use(cors());
app.use(express.json());

// Initialize database and adapters
(async () => {
  try {
    const database = await connectDatabase();

    // Initialize adapters with database
    await initializeAdapters(database); // Pass the database dependency
  } catch (error) {
    console.error("Failed to initialize the application:", error);
    process.exit(1);
  }
})();
// Configure routes
configureRoutes(app);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
