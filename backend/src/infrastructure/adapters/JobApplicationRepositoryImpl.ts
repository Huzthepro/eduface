import { JobApplicationRepository } from "../../core/ports/JobApplicationRepository";
import { Pool } from "mysql2/promise";

export class JobApplicationRepositoryImpl implements JobApplicationRepository {
  constructor(private database: Pool) {}

  async save(application: any): Promise<void> {
    const query = `INSERT INTO job_applications (id, title, company, location) VALUES (?, ?, ?, ?)`;
    const params = [
      application.id,
      application.title,
      application.company,
      application.location,
    ];
    await this.database.execute(query, params);
  }
}
