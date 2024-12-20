import { JobApplicationRepository } from "../ports/JobApplicationRepository";

export class SaveApplicationUseCase {
  constructor(private jobApplicationRepository: JobApplicationRepository) {}

  async execute(application: any): Promise<void> {
    await this.jobApplicationRepository.save(application);
  }
}
