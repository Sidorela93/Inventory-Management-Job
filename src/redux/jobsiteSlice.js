import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsites: [
    { id: 1, name: "New Jobsite, Brooklyn, NY", status: "On Hold" },
    { id: 2, name: "New Jobsite, Brooklyn, NY", status: "Completed" },
    { id: 3, name: "New Jobsite, Brooklyn, NY", status: "On Hold" },
    { id: 4, name: "New Jobsite, Brooklyn, NY", status: "On Road" },
  ],
  searchTerm: "",
};

const jobsiteSlice = createSlice({
  name: "jobsites",
  initialState,
  reducers: {
    addJobsite: (state, action) => {
      state.jobsites.push(action.payload);
    },
    updateJobsiteStatus: (state, action) => {
      const { id, status } = action.payload;
      const jobsite = state.jobsites.find((job) => job.id === id);
      if (jobsite) {
        jobsite.status = status;
      }
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addJobsite, updateJobsiteStatus, updateSearchTerm } =
  jobsiteSlice.actions;
export default jobsiteSlice.reducer;
