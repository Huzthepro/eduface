import request from "supertest";
import app from "../../src/app";
import { describe, it, expect } from "@jest/globals";

describe("POST /api/applications/save-application", () => {
  const validPayload = {
    id: "29",
    title: "Software Developer",
    company: "Eduface",
    location: "Remote",
  };

  it("should return a 201 status on successful save", async () => {
    // Send a POST request to save a new application
    const response = await request(app)
      .post("/api/applications/save-application")
      .send(validPayload);

    expect(response.status).toBe(201); // 201 Created
  });

  it("should return a 409 status with a warning for duplicate id", async () => {
    // Two entry with the same ID
    const duplicateResponse = await request(app)
      .post("/api/applications/save-application")
      .send(validPayload);

    expect(duplicateResponse.status).toBe(409);
    expect(duplicateResponse.body).toHaveProperty("error");
  });
});
