import { Request, Response } from "express";
import { FetchApplicationsUseCase } from "../../../core/use-cases/FetchApplicationsUseCase";

export class JobApplicationController {
  constructor(private fetchApplicationsUseCase: FetchApplicationsUseCase) {}

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
}
