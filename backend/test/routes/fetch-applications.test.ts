import request from "supertest";
import app from "../../src/app";

describe("Fetch Applications Route", () => {
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
