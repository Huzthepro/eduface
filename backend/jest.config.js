/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"], // Use 'src' as base directory
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Alias support
    "^@infrastructure/(.*)$": "<rootDir>/src/infrastructure/$1",
    "^@core/(.*)$": "<rootDir>/src/core/$1",
  },

  // globalSetup: "<rootDir>/test/global-setup.ts", // Add global setup
  // setupFilesAfterEnv: ["<rootDir>/test/setup.ts"], // Register the setup file
  // globalTeardown: "<rootDir>/test/global-teardown.ts", // Global teardown

  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { isolatedModules: true }],
  },
  testTimeout: 10000, // Increase timeout to avoid timeouts during async setup
};
