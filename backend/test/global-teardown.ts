import "tsconfig-paths/register";
import { disconnectDatabase } from "../src/infrastructure/database";

export default async () => {
  if (global.__SERVER__) {
    global.__SERVER__.close(); // Stop server
  }

  await disconnectDatabase(); // Close DB connection pool
};
