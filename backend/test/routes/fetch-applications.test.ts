import request from "supertest";
import app from "../../src/app";
import { describe, test, expect } from "@jest/globals";

describe("Fetch Jobs Route", () => {
  test("GET /api/jobs/fetch-jobs", async () => {
    const response = await request(app).get("/api/jobs/fetch-jobs");
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
