import React from "react";

function StatusBadge({ status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green";
      case "On Hold":
        return "orange";
      case "On Road":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <span style={{ color: getStatusColor(status), fontWeight: "bold" }}>
      {status}
    </span>
  );
}

export default StatusBadge;
