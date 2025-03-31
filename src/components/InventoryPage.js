import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const InventoryPage = () => {
  const { jobsiteId } = useParams(); 
  const navigate = useNavigate();
  
  const jobsites = useSelector((state) => state.jobsites.jobsites);
  
  const jobsite = jobsites?.find((j) => j.id.toString() === jobsiteId);
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  if (!jobsite) {
    return <h2 className="text-center text-danger">Jobsite Not Found</h2>;
  }

  return (
    <div className="container-fluid p-4" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h4 className="fw-bold text-secondary mb-3">Jobsite Manager</h4>

      <div className="d-flex">
        {/* Paneli i majtë */}
        <div className="p-3 border-end bg-white shadow-sm rounded" style={{ width: "250px", minHeight: "100%" }}>
          <h6 className="fw-bold">{jobsite.name}</h6> 
          <p className="text-muted"><b>Category:</b> {jobsite.category || "No Category"}</p> 

          <ul className="list-unstyled">
            {jobsite?.services?.length > 0 ? (
              jobsite.services.map((service, index) => (
                <li
                  key={index}
                  className={`p-2 border rounded mb-2 ${selectedService === service ? "bg-light" : ""}`}
                  style={{ cursor: "pointer", fontSize: "14px" }}
                  onClick={() => setSelectedService(service)}
                >
                  {service}
                </li>
              ))
            ) : (
              <p className="text-muted">No services available</p>
            )}
          </ul>

          <button className="btn btn-outline-primary w-100 mt-3" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>

        {/* Paneli i djathtë */}
        <div className="flex-grow-1 p-3 bg-white shadow-sm rounded ms-3">
          {/* Rreshti me titullin dhe input-in e kërkimit */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="m-0">Data Grid</h5>
            <input
              type="text"
              className="form-control rounded-pill px-3"
              style={{ width: "250px", fontSize: "14px", padding: "6px 12px" }}
              placeholder="🔍 Search a driver"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {selectedService ? (
            <p className="text-center">Showing data for <b>{selectedService}</b></p>
          ) : (
            <div className="text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No Service" width="100" />
              <h6 className="mt-2">No Service Selected</h6>
              <p>Please select a service on your left to proceed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
