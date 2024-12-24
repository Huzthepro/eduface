import { Request, Response } from "express";

import { FetchApplicationsUseCase } from "core/use-cases/job-application/FetchApplicationsUseCase";
import { SaveApplicationUseCase } from "core/use-cases/job-application/SaveApplicationUseCase";
import { GetApplicationUseCase } from "core/use-cases/job-application/GetApplicationUseCase";
import { GetSavedApplicationsUseCase } from "core/use-cases/job-application/GetSavedApplicationsUseCase";

export class JobApplicationController {
  constructor(
    private fetchApplicationsUseCase: FetchApplicationsUseCase,
    private saveApplicationUseCase: SaveApplicationUseCase,
    private getApplicationUseCase: GetApplicationUseCase,
    private getSavedApplicationsUseCase: GetSavedApplicationsUseCase
  ) {}

  async fetchApplications(req: Request, res: Response): Promise<void> {
    try {
      const applications = await this.fetchApplicationsUseCase.execute();
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({
        message: "Cannot get Job applications, please try again later.",
        error: (error as Error).message,
      });
      console.error((error as Error).message);
    }
  }

  async saveApplication(req: Request, res: Response): Promise<void> {
    try {
      const application = req.body;
      const { id } = application;

      // Check for duplicate ID
      const existingApplication = await this.getApplicationUseCase.execute(id);
      if (existingApplication) {
        res.status(409).json({
          message: "Job application already exists.",
          error: `Job application with id ${id} already exists.`,
        });
        return;
      }

      await this.saveApplicationUseCase.execute(application);
      res.status(201).json({ message: "Application saved successfully." });
    } catch (error) {
      res.status(500).json({
        message: "Cannot save Job application, please try again later.",
        error: (error as Error).message,
      });
      console.error((error as Error).message);
    }
  }

  async getSavedApplications(req: Request, res: Response): Promise<void> {
    try {
      const applications = await this.getSavedApplicationsUseCase.execute();
      res.status(200).json(applications);
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
