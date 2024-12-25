import { Request, Response } from "express";
import { connectDatabase } from "../../database"; // Ensure it doesn't create new pools
import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null; // Use the same pool as the database module

export const healthCheck = async (req: Request, res: Response) => {
  try {
    if (!pool) {
      // Use the existing pool if already connected
      pool = await connectDatabase();
    }

    const connection = await pool.getConnection(); // Get connection from pool
    await connection.ping(); // Ping the database
    connection.release(); // Release it back to the pool

    // Respond with OK if ping succeeds
    res.status(200).json({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Health Check Error:", error); // Log actual error for debugging

    // Respond with ERROR if ping or connection fails
    res.status(500).json({
      status: "error",
      database: "disconnected",
      error: (error as Error).message,
      timestamp: new Date().toISOString(),
    });
  }
};
