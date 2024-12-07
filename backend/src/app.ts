import express from "express";
import cors from "cors";
import { connectDatabase } from "./infrastructure/database";
import { configureRoutes } from "./infrastructure/api";
const app = express();

// const corsOptions = {
//   origin: ['http://a.com', 'https://b.com'], // Allowed origins
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// };
app.use(cors());
app.use(express.json());

// Database connection
(async () => {
  try {
    await connectDatabase();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
})();

// Routes
configureRoutes(app);

export default app;
