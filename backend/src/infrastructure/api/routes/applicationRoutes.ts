import express from "express";
import { jobApplicationController } from "../../adapters/adapters.di";

const router = express.Router();

router.get("/fetch-applications", (req, res) =>
  jobApplicationController.fetchApplications(req, res)
);

router.post("/save-application", (req, res) =>
  console.log("Saving application...")
);

export default router;
