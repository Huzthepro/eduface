import { JobController } from "infrastructure/api/controllers/JobController";
import { JobRepositoryImpl } from "infrastructure/adapters/job/JobRepositoryImpl";

import { SaveJobUseCase } from "@/core/use-cases/job/SaveJobUseCase";
import { GetJobUseCase } from "@/core/use-cases/job/GetJobUseCase";
import { GetSavedJobsUseCase } from "@/core/use-cases/job/GetSavedJobsUseCase";

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
