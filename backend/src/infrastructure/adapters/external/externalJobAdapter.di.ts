import { ExternalJobController } from "infrastructure/api/controllers/jobController";
import { MockLmsApiRepositoryImpl } from "infrastructure/adapters/external/mockLmsApiRepositoryImpl";

import { FetchJobsUseCase } from "core/use-cases/job/fetchJobsUseCase";

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
