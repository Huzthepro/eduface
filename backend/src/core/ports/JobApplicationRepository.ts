export interface JobApplicationRepository {
  save(application: any): Promise<void>;
  findById(id: string): Promise<any | null>;
}
