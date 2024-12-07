import request from "supertest";
import app from "../../src/app";
import { describe, it, expect } from "@jest/globals";
import { v4 as uuidv4 } from "uuid";

describe("POST /api/applications/save-application", () => {
  const id = uuidv4();
  const validPayload = {
    id: id,
    title: "Software Developer",
    company: "Eduface",
    location: "Remote",
  };

  it("should return a 201 status on successful save", async () => {
    // Send a POST request to save a new application
    const response = await request(app)
      .post("/api/applications/save-application")
      .send(validPayload);

    // Assertions
    expect(response.status).toBe(201); // 201 Created
  });

  it("should return a 409 status with a warning for duplicate id", async () => {
    // Save the same payload again to simulate a duplicate
    const duplicateResponse = await request(app)
      .post("/api/applications/save-application")
      .send(validPayload);

    // Assertions
    expect(duplicateResponse.status).toBe(409); // 409 Conflict
    expect(duplicateResponse.body).toHaveProperty("error");
    expect(duplicateResponse.body.error).toContain("Duplicate entry for id");
  });
});
