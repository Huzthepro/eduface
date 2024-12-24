import { connectDatabase } from "../src/infrastructure/database";
import dotenv from "dotenv";
import { initializeAdapters } from "../src/infrastructure/adapters/job-application/adapters.di";

dotenv.config();

export let testDb: any;

// Before all tests, initialize dependencies
beforeAll(async () => {
  console.log("🔄 Setting up database connection for tests...");
  testDb = await connectDatabase(); // Connect database

  await initializeAdapters(testDb); // Call initializeAdapters
});

// After all tests, clean up
afterAll(async () => {
  if (testDb) {
    await testDb.end();
  }
});
