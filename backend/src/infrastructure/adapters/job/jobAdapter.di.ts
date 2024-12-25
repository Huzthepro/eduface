import { JobController } from "infrastructure/api/controllers/JobController";
import { MockLmsApiAdapter } from "infrastructure/adapters/external/MockLmsApiAdapter";
import { JobRepositoryImpl } from "infrastructure/adapters/job/JobRepositoryImpl";

import { FetchJobsUseCase } from "@/core/use-cases/job/FetchJobsUseCase";
import { SaveJobUseCase } from "@/core/use-cases/job/SaveJobUseCase";
import { GetJobUseCase } from "@/core/use-cases/job/GetJobUseCase";
import { GetSavedJobsUseCase } from "@/core/use-cases/job/GetSavedJobsUseCase";

let jobController: JobController;

// Create a function to initialize dependencies
export const jobAdapter = async (database: any) => {
  // Adapters
  const jobRepository = new JobRepositoryImpl(database);
  const externalApiService = new MockLmsApiAdapter();

  // Use Cases
  const fetchJobsUseCase = new FetchJobsUseCase(externalApiService);
  const saveJobUseCase = new SaveJobUseCase(jobRepository);
  const getJobUseCase = new GetJobUseCase(jobRepository);
  const getSavedJobsUseCase = new GetSavedJobsUseCase(jobRepository);

  // Controller
  jobController = new JobController(
    fetchJobsUseCase,
    saveJobUseCase,
    getJobUseCase,
    getSavedJobsUseCase
  );
};

export { jobController };
