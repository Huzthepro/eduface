import { JobRepository } from "@/core/ports/JobRepository";

export class GetJobUseCase {
  constructor(private jobRepository: JobRepository) {}

  async execute(id: string): Promise<any | null> {
    return await this.jobRepository.findById(id);
  }
}
