import express from "express";
import { ExternalJobControllerInstance } from "infrastructure/adapters/external/externalJobAdapter.di";
import { jobControllerInstance } from "infrastructure/adapters/job/jobAdapter.di";
import { validateJobCalls } from "infrastructure/api/middlewares/validate-request";

const router = express.Router();

router.get("/fetch-jobs", (req, res) =>
  ExternalJobControllerInstance.fetchJobs(req, res)
);

router.post("/save-job", validateJobCalls, (req, res) =>
  jobControllerInstance.saveJob(req, res)
);

router.get("/my-jobs", (req, res) =>
  jobControllerInstance.getSavedJobs(req, res)
);

export default router;
