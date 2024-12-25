import request from "supertest";
import app from "../../src/app";
import { describe, test, expect } from "@jest/globals";

describe("My Jobs Route", () => {
  test("GET /api/jobs/my-jobs", async () => {
    const response = await request(app).get("/api/jobs/my-jobs");
    expect(response.status).toBe(200);
  });
});
