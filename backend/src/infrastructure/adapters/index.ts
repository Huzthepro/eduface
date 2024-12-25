import { jobAdapter } from "infrastructure/adapters/job/jobAdapter.di";
import { externalJobAdapter } from "infrastructure/adapters/external/externalJobAdapter.di";
export const initializeAdapters = async (database: any) => {
  jobAdapter(database);
};
export const initializeNonDBAdapters = async () => {
  externalJobAdapter();
};
