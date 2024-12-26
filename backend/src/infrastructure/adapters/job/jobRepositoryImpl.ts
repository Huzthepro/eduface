import { Job } from "core/entities/job";
import { JobRepository } from "core/ports/jobRepository";
import { Pool } from "mysql2/promise";

export class JobRepositoryImpl implements JobRepository {
  constructor(private database: Pool) {}

  async save(job: any): Promise<void> {
    const query = `INSERT INTO job_applications (id, title, company, location) VALUES (?, ?, ?, ?)`;
    const params = [job.id, job.title, job.company, job.location];
    await this.database.execute(query, params);
  }

  async findById(id: string): Promise<any> {
    const [rows] = await this.database.execute(
      "SELECT * FROM job_applications WHERE id = ?",
      [id]
    );

    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0] as Job;
    }
    return null;
  }

  async findAll(): Promise<any[]> {
    const query = `SELECT * FROM job_applications`;
    const [rows] = await this.database.query(query);

    return rows as any[];
  }
}
