import request from "supertest";
import app from "../../src/app";
import { Server } from "http";
import { disconnectDatabase } from "../../src/infrastructure/database"; // Import database cleanup method

let server: Server;

const waitForDatabaseConnection = async () => {
  let connected = false;
  let attempts = 0;

  const originalConsoleError = console.error; // Save original console.error
  console.error = () => {}; // Suppress error logs during retries

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
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
    }
  }

  console.error = originalConsoleError; // Restore original console.error

  if (!connected) {
    throw new Error("Database connection failed after multiple attempts.");
  }
};

describe("Fetch Applications Route", () => {
  beforeAll(async () => {
    // Start the server and wait for DB connection
    server = app.listen(3000);
    await waitForDatabaseConnection();
  });

  afterAll(async () => {
    // Close the server to release resources
    server.close();

    // Close the database connection pool
    await disconnectDatabase();
  });

  test("GET /api/applications/fetch-applications", async () => {
    const response = await request(app).get(
      "/api/applications/fetch-applications"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: "1",
        title: "Software Developer",
        company: "Eduface",
        location: "Remote",
      },
      {
        id: "2",
        title: "Frontend Engineer",
        company: "Eduface",
        location: "Leiden",
      },
      {
        id: "3",
        title: "Backend Developer",
        company: "Eduface",
        location: "Nijmegen",
      },
    ]);
  });
});
