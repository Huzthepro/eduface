import { jobAdapter } from "infrastructure/adapters/job/jobAdapter.di";
export const initializeAdapters = async (database: any) => {
  jobAdapter(database);
};
