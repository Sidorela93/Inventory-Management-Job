import React from 'react';
import { useSelector } from 'react-redux';
import { selectJobsiteSummary } from '../redux/selectors';

const JobsiteSummary = () => {
  const { onRoad, completed, onHold } = useSelector(selectJobsiteSummary);

  return (
    <div className="jobsite-summary">
      <div className="status-box on-road"> {onRoad} On Road </div>
      <div className="status-box completed"> {completed} Completed </div>
      <div className="status-box on-hold"> {onHold} On Hold </div>
    </div>
  );
};

export default JobsiteSummary;
