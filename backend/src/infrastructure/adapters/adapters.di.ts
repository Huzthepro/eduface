import { JobApplicationController } from "../api/controllers/JobApplicationController";
import { MockLmsApiAdapter } from "./external/MockLmsApiAdapter";
import { FetchApplicationsUseCase } from "../../core/use-cases/FetchApplicationsUseCase";

let jobApplicationController: JobApplicationController;

(async () => {
  // Adapters
  const externalApiService = new MockLmsApiAdapter();

  // Use Cases
  const fetchApplicationsUseCase = new FetchApplicationsUseCase(
    externalApiService
  );

  // Controller
  jobApplicationController = new JobApplicationController(
    fetchApplicationsUseCase
  );
})();

export { jobApplicationController };
