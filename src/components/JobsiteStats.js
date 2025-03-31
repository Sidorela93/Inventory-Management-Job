import React from "react";
import { useSelector } from "react-redux";
import "./JobsiteStats.css"; // Importo stilizimin

function JobsiteStats() {
  const jobsites = useSelector((state) => state.jobsites.jobsites);

  // Përllogaritja e numrit të jobsite-ve sipas statusit
  const onRoadCount = jobsites.filter((job) => job.status === "On Road").length;
  const completedCount = jobsites.filter((job) => job.status === "Completed").length;
  const onHoldCount = jobsites.filter((job) => job.status === "On Hold").length;

  return (
    <div className="container jobsite-stats-container">
      <div className="row g-3 justify-content-center">
        {/* On Road */}
        <div className="col-12 col-md-4">
          <div className="stats-box" style={{ backgroundColor: "#ECDE7C" }}>
            <span className="stats-text">{onRoadCount} On Road</span>
          </div>
        </div>

        {/* Completed */}
        <div className="col-12 col-md-4">
          <div className="stats-box" style={{ backgroundColor: "#7AC14D" }}>
            <span className="stats-text">{completedCount} Completed</span>
          </div>
        </div>

        {/* On Hold */}
        <div className="col-12 col-md-4">
          <div className="stats-box" style={{ backgroundColor: "#FE4C4A" }}>
            <span className="stats-text">{onHoldCount} On Hold</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsiteStats;
