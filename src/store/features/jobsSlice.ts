// store/jobsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.interface";

export interface Job {
  title: string;
  logoUrl: string;
  company: string;
  location: string;
  timeAgo: string;
  applicants: number;
}

interface JobsState {
  jobs: Job[];
}

const initialState: JobsState = {
  jobs: [], // initially empty
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs(state, action: PayloadAction<Job[]>) {
      state.jobs = action.payload;
    },
    addJob(state, action: PayloadAction<Job>) {
      state.jobs.push(action.payload);
    },
    clearJobs(state) {
      state.jobs = [];
    },
  },
});

export const { setJobs, addJob, clearJobs } = jobsSlice.actions;
export const selectJobs = (state: RootState) => state.jobs.jobs;
export default jobsSlice.reducer;
