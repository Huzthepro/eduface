export let testDb: any;
import request from "supertest"; // For API calls
import app from "../src/app"; // Import the app
import { disconnectDatabase } from "../src/infrastructure/database";
import { beforeAll, afterAll } from "@jest/globals";

const waitForDatabaseConnection = async () => {
  let connected = false;
  let attempts = 0;

  // Suppress error logs during retries
  const originalConsoleError = console.error;
  console.error = () => {};

  while (!connected && attempts < 5) {
    try {
      // Make API call to fetch applications endpoint
      const response = await request(app).get("/api/health-check");
      if (response.status === 200) {
        // If the endpoint responds with 200, DB is ready
        connected = true;
      }
    } catch (error) {
      attempts++;
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Retry after 1 second
    }
  }

  console.error = originalConsoleError; // Restore error logging

  if (!connected) {
    throw new Error("Database connection failed after multiple attempts.");
  }
};

beforeAll(async () => {
  // Wait until database is ready using fetch-applications endpoint
  await waitForDatabaseConnection();
  console.log("Database is ready for tests.");
});

afterAll(async () => {
  disconnectDatabase();
});
