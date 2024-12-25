import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let pool: mysql.Pool | null = null;
export const disconnectDatabase = async () => {
  if (pool) {
    await pool.end();
    pool = null;
    console.log("🔌 Database disconnected successfully!");
  }
};

export const connectDatabase = async (): Promise<mysql.Pool> => {
  if (pool) {
    console.log("Reusing existing database connection pool.");
    return pool;
  }

  try {
    // Create pool
    pool = mysql.createPool({
      host: process.env.DB_HOST || "",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Test connection with ping
    const connection = await pool.getConnection(); // Acquire a connection from the pool
    await connection.ping(); // Test if the connection is alive
    connection.release(); // Release the connection back to the pool

    console.log("✅ Database connected successfully!");
    return pool;
  } catch (error) {
    throw new Error((error as Error).message); // Throw an error if connection fails
  }
};
