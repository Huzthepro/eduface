import { JobApplicationRepository } from "../ports/JobApplicationRepository";

export class GetApplicationUseCase {
  constructor(private jobApplicationRepository: JobApplicationRepository) {}

  async execute(id: string): Promise<any | null> {
    return await this.jobApplicationRepository.findById(id);
  }
}
