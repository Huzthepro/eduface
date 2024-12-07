import request from "supertest";
import app from "../../src/app";
import { describe, it, expect } from "@jest/globals";

describe("GET /api/applications/fetch-applications", () => {
  it("should return data with objects containing id, title, company, and location", async () => {
    // Send a GET request to the endpoint
    const response = await request(app).get(
      "/api/applications/fetch-applications"
    );

    // Assertions
    expect(response.status).toBe(200);

    // Data Should be an array
    expect(Array.isArray(response.body)).toBe(true);

    // Values does not matter much but keys should be present
    response.body.forEach((item: any) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("company");
      expect(item).toHaveProperty("location");
    });
  });
});
