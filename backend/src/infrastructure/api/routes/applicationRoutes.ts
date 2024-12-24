import express from "express";
import { jobApplicationController } from "infrastructure/adapters/job-application/adapters.di";
import { validateJobApplication } from "infrastructure/api/middlewares/validate-request";

const router = express.Router();

router.get("/fetch-applications", (req, res) =>
  jobApplicationController.fetchApplications(req, res)
);

router.post("/save-application", validateJobApplication, (req, res) =>
  jobApplicationController.saveApplication(req, res)
);

router.get("/my-applications", (req, res) =>
  jobApplicationController.getSavedApplications(req, res)
);

export default router;
