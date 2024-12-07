import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let pool: mysql.Pool | null = null;

export const connectDatabase = async (): Promise<mysql.Pool> => {
  if (pool) {
    console.log("Reusing existing database connection pool.");
    return pool;
  }

  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "job_applications",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log("Database connected successfully!");
    return pool;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw new Error("Database connection failed.");
  }
};
