import { JobApplicationController } from "infrastructure/api/controllers/JobApplicationController";
import { MockLmsApiAdapter } from "infrastructure/adapters/external/MockLmsApiAdapter";
import { JobApplicationRepositoryImpl } from "infrastructure/adapters/job-application/JobApplicationRepositoryImpl";

import { FetchApplicationsUseCase } from "core/use-cases/job-application/FetchApplicationsUseCase";
import { SaveApplicationUseCase } from "core/use-cases/job-application/SaveApplicationUseCase";
import { GetApplicationUseCase } from "core/use-cases/job-application/GetApplicationUseCase";
import { GetSavedApplicationsUseCase } from "core/use-cases/job-application/GetSavedApplicationsUseCase";

let jobApplicationController: JobApplicationController;

// Create a function to initialize dependencies
export const initializeAdapters = async (database: any) => {
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
