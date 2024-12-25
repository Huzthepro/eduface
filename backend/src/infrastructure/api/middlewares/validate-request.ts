import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { jobSchema } from "@/infrastructure/validation/jobSchema";

export const validateJobCalls = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    jobSchema.parse(req.body);
    next(); // Continue to the controller if validation succeeds
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      });
    } else {
      next(error);
    }
  }
};
