import "tsconfig-paths/register"; // Enable alias support
import request from "supertest";
import app from "../src/app";

const waitForDatabaseConnection = async () => {
  let connected = false;
  let attempts = 0;

  const originalConsoleError = console.error; // Suppress error logs
  console.error = () => {};

  while (!connected && attempts < 5) {
    try {
      const response = await request(app).get(
        "/api/applications/fetch-applications"
      );
      if (response.status !== 500) {
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

export default async () => {
  console.log("⏳ Waiting for database connection...");
  await waitForDatabaseConnection(); // Wait until DB is ready
  console.log("✅ Database connection established!");
};
