import { JobApplicationController } from "../api/controllers/JobApplicationController";
import { connectDatabase } from "../database";

import { MockLmsApiAdapter } from "./external/MockLmsApiAdapter";
import { JobApplicationRepositoryImpl } from "./JobApplicationRepositoryImpl";

import { FetchApplicationsUseCase } from "../../core/use-cases/FetchApplicationsUseCase";
import { SaveApplicationUseCase } from "../../core/use-cases/SaveApplicationUseCase";

let jobApplicationController: JobApplicationController;

(async () => {
  // Connect to the database
  const database = await connectDatabase();

  // Adapters
  const jobApplicationRepository = new JobApplicationRepositoryImpl(database);
  const externalApiService = new MockLmsApiAdapter();

  // Use Cases
  const fetchApplicationsUseCase = new FetchApplicationsUseCase(
    externalApiService
  );
  const saveApplicationUseCase = new SaveApplicationUseCase(
    jobApplicationRepository
  );

  // Controller
  jobApplicationController = new JobApplicationController(
    fetchApplicationsUseCase,
    saveApplicationUseCase
  );
})();

export { jobApplicationController };
