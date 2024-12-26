import { Request, Response } from "express";

import { FetchJobsUseCase } from "core/use-cases/job/fetchJobsUseCase";
import { SaveJobUseCase } from "core/use-cases/job/saveJobUseCase";
import { GetJobUseCase } from "core/use-cases/job/getJobUseCase";
import { GetSavedJobsUseCase } from "core/use-cases/job/getSavedJobsUseCase";

export class JobController {
  constructor(
    private saveJobUseCase: SaveJobUseCase,
    private getJobUseCase: GetJobUseCase,
    private getSavedJobsUseCase: GetSavedJobsUseCase
  ) {}

  async saveJob(req: Request, res: Response): Promise<void> {
    try {
      const job = req.body;
      const { id } = job;

      // Check for duplicate ID
      const existingApplication = await this.getJobUseCase.execute(id);
      if (existingApplication) {
        res.status(409).json({
          message: "Job application already exists.",
          error: `Job application with id ${id} already exists.`,
        });
        return;
      }

      await this.saveJobUseCase.execute(job);
      res.status(201).json({ message: "Application saved successfully." });
    } catch (error) {
      res.status(500).json({
        message: "Cannot save Job application, please try again later.",
        error: (error as Error).message,
      });
      console.error((error as Error).message);
    }
  }

  async getSavedJobs(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await this.getSavedJobsUseCase.execute();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({
        message:
          "Cannot retrieve saved job applications, please try again later.",
        error: (error as Error).message,
      });
      console.error((error as Error).message);
    }
  }
}

export class ExternalJobController {
  constructor(private fetchJobsUseCase: FetchJobsUseCase) {}

  async fetchJobs(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await this.fetchJobsUseCase.execute();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({
        message: "Cannot get Job applications, please try again later.",
        error: (error as Error).message,
      });
      console.error((error as Error).message);
    }
  }
}
