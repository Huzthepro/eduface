import { JobController } from "infrastructure/api/controllers/jobController";
import { JobRepositoryImpl } from "infrastructure/adapters/job/jobRepositoryImpl";

import { SaveJobUseCase } from "core/use-cases/job/saveJobUseCase";
import { GetJobUseCase } from "core/use-cases/job/getJobUseCase";
import { GetSavedJobsUseCase } from "core/use-cases/job/getSavedJobsUseCase";

let jobControllerInstance: JobController;

// Create a function to initialize dependencies
export const jobAdapter = async (database: any) => {
  // Adapter
  const jobRepository = new JobRepositoryImpl(database);

  // Use Cases
  const saveJobUseCase = new SaveJobUseCase(jobRepository);
  const getJobUseCase = new GetJobUseCase(jobRepository);
  const getSavedJobsUseCase = new GetSavedJobsUseCase(jobRepository);

  // Controller
  jobControllerInstance = new JobController(
    saveJobUseCase,
    getJobUseCase,
    getSavedJobsUseCase
  );
};

export { jobControllerInstance };
