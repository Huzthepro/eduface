export interface JobApplicationRepository {
  save(application: any): Promise<void>;
}
