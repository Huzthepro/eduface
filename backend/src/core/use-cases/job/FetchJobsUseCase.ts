import { ExternalApiService } from "core/ports/ExternalApiService";

export class FetchJobsUseCase {
  constructor(private externalApiService: ExternalApiService) {}

  async execute(): Promise<any[]> {
    return await this.externalApiService.fetchJobs();
  }
}
