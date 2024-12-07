import express from "express";

const router = express.Router();

router.get("/fetch-applications", (req, res) =>
  console.log("Fetching applications...")
);

router.post("/save-application", (req, res) =>
  console.log("Saving application...")
);

export default router;
