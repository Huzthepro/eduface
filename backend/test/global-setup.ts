import "tsconfig-paths/register"; // Enable alias support
import { connectDatabase } from "../src/infrastructure/database";
import { initializeAdapters } from "../src/infrastructure/adapters/job-application/adapters.di";
import dotenv from "dotenv";

dotenv.config();

module.exports = async () => {
  console.log("🔄 Global Setup: Initializing database and dependencies...");

  // Connect database and store globally
  const testDb = await connectDatabase();
  console.log("✅ Global Setup: Database connected!");

  // Initialize dependencies
  await initializeAdapters(testDb);
  console.log("✅ Global Setup: Dependencies initialized!");

  // Store database globally for teardown
  global.__TEST_DB__ = testDb;

  // Return success to ensure Jest waits!
  return Promise.resolve();
};
