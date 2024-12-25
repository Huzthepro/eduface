import { ExternalJobController } from "infrastructure/api/controllers/JobController";
import { MockLmsApiRepositoryImpl } from "@/infrastructure/adapters/external/MockLmsApiRepositoryImpl";

import { FetchJobsUseCase } from "@/core/use-cases/job/FetchJobsUseCase";

let ExternalJobControllerInstance: ExternalJobController;

// Create a function to initialize dependencies
export const externalJobAdapter = async () => {
  const externalApiService = new MockLmsApiRepositoryImpl();

  // Use Cases
  const fetchJobsUseCase = new FetchJobsUseCase(externalApiService);

  // Controller
  ExternalJobControllerInstance = new ExternalJobController(fetchJobsUseCase);
};

export { ExternalJobControllerInstance };
