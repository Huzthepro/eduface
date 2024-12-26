import { JobRepository } from "core/ports/jobRepository";

export class SaveJobUseCase {
  constructor(private jobRepository: JobRepository) {}

  async execute(job: any): Promise<void> {
    await this.jobRepository.save(job);
  }
}
