module.exports = async () => {
  console.log("🛑 Global Teardown: Closing database connection...");

  const db = global.__TEST_DB__;
  if (db) {
    await db.end(); // Close connection
    console.log("✅ Global Teardown: Database connection closed!");
  }

  // Return success to prevent hanging
  return Promise.resolve();
};
