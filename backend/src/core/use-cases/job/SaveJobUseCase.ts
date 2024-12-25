import { JobRepository } from "@/core/ports/JobRepository";

export class SaveJobUseCase {
  constructor(private jobRepository: JobRepository) {}

  async execute(job: any): Promise<void> {
    await this.jobRepository.save(job);
  }
}
