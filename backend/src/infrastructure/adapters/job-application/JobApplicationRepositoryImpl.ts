import { JobApplication } from "core/entities/jobApplication";
import { JobApplicationRepository } from "core/ports/JobApplicationRepository";
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

  async findById(id: string): Promise<any> {
    const [rows] = await this.database.execute(
      "SELECT * FROM job_applications WHERE id = ?",
      [id]
    );

    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0] as JobApplication;
    }
    return null;
  }

  async findAll(): Promise<any[]> {
    const query = `SELECT * FROM job_applications`;
    const [rows] = await this.database.query(query);

    return rows as any[];
  }
}
