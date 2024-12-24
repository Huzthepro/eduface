import { ExternalApiService } from "core/ports/ExternalApiService";
import { JobApplication } from "core/entities/jobApplication";
import fs from "fs/promises";
import path from "path";

export class MockLmsApiAdapter implements ExternalApiService {
  private filePath: string;

  constructor() {
    // Define the path to the mock data file
    this.filePath = path.resolve(__dirname, "../../../../data/mock-data.txt");
  }

  async fetchJobApplications(): Promise<JobApplication[]> {
    try {
      // Read the file content
      const fileContent = await fs.readFile(this.filePath, "utf-8");

      // Parse the content as JSON
      const applications: JobApplication[] = JSON.parse(fileContent);

      // Validate and return the applications
      return applications;
    } catch (error) {
      console.error("Error reading mock data file:", error);
      throw new Error("Failed to fetch job applications from mock file.");
    }
  }
}
