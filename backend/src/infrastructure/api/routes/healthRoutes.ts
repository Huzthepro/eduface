import { Router } from "express";
import { healthCheck } from "../controllers/healthCheckController";

const router = Router();

router.get("/health-check", healthCheck);

export default router;
