import { JobApplicationRepository } from "../ports/JobApplicationRepository";

export class GetSavedApplicationsUseCase {
  constructor(private jobApplicationRepository: JobApplicationRepository) {}

  async execute(): Promise<any[]> {
    return await this.jobApplicationRepository.findAll();
  }
}
