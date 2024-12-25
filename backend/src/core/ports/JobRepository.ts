export interface JobRepository {
  save(job: any): Promise<void>;
  findById(id: string): Promise<any | null>;
  findAll(): Promise<any[]>;
}
