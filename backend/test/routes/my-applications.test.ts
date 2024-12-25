import request from "supertest";
import app from "../../src/app";

describe("My Applications Route", () => {
  test("GET /api/applications/my-applications", async () => {
    const response = await request(app).get(
      "/api/applications/my-applications"
    );
    expect(response.status).toBe(200);
  });
});
