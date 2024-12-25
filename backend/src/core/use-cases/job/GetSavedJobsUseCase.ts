import { JobRepository } from "@/core/ports/JobRepository";

export class GetSavedJobsUseCase {
  constructor(private jobRepository: JobRepository) {}

  async execute(): Promise<any[]> {
    return await this.jobRepository.findAll();
  }
}
