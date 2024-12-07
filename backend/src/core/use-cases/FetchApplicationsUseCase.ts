import { ExternalApiService } from "../ports/ExternalApiService";

export class FetchApplicationsUseCase {
  constructor(private externalApiService: ExternalApiService) {}

  async execute(): Promise<any[]> {
    return await this.externalApiService.fetchJobApplications();
  }
}
