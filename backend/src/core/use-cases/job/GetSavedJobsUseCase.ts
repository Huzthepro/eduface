import { JobRepository } from "@/core/ports/jobRepository";

export class GetSavedJobsUseCase {
  constructor(private jobRepository: JobRepository) {}

  async execute(): Promise<any[]> {
    return await this.jobRepository.findAll();
  }
}
