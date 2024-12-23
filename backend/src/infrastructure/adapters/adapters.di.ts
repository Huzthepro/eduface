import { JobApplicationController } from "../api/controllers/JobApplicationController";
import { MockLmsApiAdapter } from "./external/MockLmsApiAdapter";
import { JobApplicationRepositoryImpl } from "./JobApplicationRepositoryImpl";

import { FetchApplicationsUseCase } from "../../core/use-cases/FetchApplicationsUseCase";
import { SaveApplicationUseCase } from "../../core/use-cases/SaveApplicationUseCase";
import { GetApplicationUseCase } from "../../core/use-cases/GetApplicationUseCase";
import { GetSavedApplicationsUseCase } from "../../core/use-cases/GetSavedApplicationsUseCase";

let jobApplicationController: JobApplicationController;

// Create a function to initialize dependencies
export const initializeAdapters = async (database: any) => {
  console.log("Initializing adapters...");

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
  const getApplicationUseCase = new GetApplicationUseCase(
    jobApplicationRepository
  );
  const getSavedApplicationsUseCase = new GetSavedApplicationsUseCase(
    jobApplicationRepository
  );

  // Controller
  jobApplicationController = new JobApplicationController(
    fetchApplicationsUseCase,
    saveApplicationUseCase,
    getApplicationUseCase,
    getSavedApplicationsUseCase
  );
};

export { jobApplicationController };
