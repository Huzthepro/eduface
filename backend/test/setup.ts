export let testDb: any;
import { connectDatabase } from "../src/infrastructure/database";

let dbConnection: any;

beforeAll(async () => {
  // Establish database connection before tests
  dbConnection = await connectDatabase();
});

afterAll(async () => {
  // Close database connection after tests
  if (dbConnection && dbConnection.end) {
    await dbConnection.end();
  }
});
