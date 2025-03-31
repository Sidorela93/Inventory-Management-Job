export const selectJobsites = (state) => state.jobsites.jobsites || [];

export const selectFilteredJobsites = (state) => {
  const jobsites = state.jobsites.jobsites || []; // Siguro që nuk është undefined
  const searchTerm = state.jobsites.searchTerm.toLowerCase();

  console.log("Jobsites nga Redux Store:", jobsites); // Debugging

  if (!Array.isArray(jobsites)) {
    console.error("Gabim: jobsites nuk është një array!", jobsites);
    return [];
  }

  return jobsites.filter((jobsite) =>
    jobsite.name.toLowerCase().includes(searchTerm)
  );
};
