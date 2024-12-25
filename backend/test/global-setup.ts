import "tsconfig-paths/register"; // Enable alias support
import app from "../src/app"; // Adjust path based on your structure
import { disconnectDatabase } from "../src/infrastructure/database"; // Replace with actual path
import { Server } from "http";

let server: Server;

const waitForDatabaseConnection = async () => {
  let connected = false;
  let attempts = 0;

  const originalConsoleError = console.error; // Suppress logs
  console.error = () => {};

  while (!connected && attempts < 5) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/applications/fetch-applications"
      );
      if (response.status !== 500) {
        connected = true;
      }
    } catch (error) {
      attempts++;
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Retry every 1 second
    }
  }

  console.error = originalConsoleError; // Restore logs

  if (!connected) {
    throw new Error("Database connection failed after multiple attempts.");
  }
};

export default async () => {
  server = app.listen(3000); // Start server
  await waitForDatabaseConnection();
  global.__SERVER__ = server; // Save server to global scope
};
