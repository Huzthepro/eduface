import { ExternalApiService } from "core/ports/ExternalApiService";
import { Job } from "@/core/entities/job";
import fs from "fs/promises";
import path from "path";

export class MockLmsApiRepositoryImpl implements ExternalApiService {
  private filePath: string;

  constructor() {
    // Define the path to the mock data file
    this.filePath = path.resolve(__dirname, "../../../../data/mock-data.txt");
  }

  async fetchJobs(): Promise<Job[]> {
    try {
      // Read the file content
      const fileContent = await fs.readFile(this.filePath, "utf-8");

      // Parse the content as JSON
      const jobs: Job[] = JSON.parse(fileContent);

      // Validate and return the applications
      return jobs;
    } catch (error) {
      console.error("Error reading mock data file:", error);
      throw new Error("Failed to fetch job applications from mock file.");
    }
  }
}
