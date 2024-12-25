import express from "express";
import { jobController } from "infrastructure/adapters/job/jobAdapter.di";
import { validateJobCalls } from "infrastructure/api/middlewares/validate-request";

const router = express.Router();

router.get("/fetch-jobs", (req, res) => jobController.fetchJobs(req, res));

router.post("/save-job", validateJobCalls, (req, res) =>
  jobController.saveJob(req, res)
);

router.get("/my-jobs", (req, res) => jobController.getSavedJobs(req, res));

export default router;
