import React from "react";
import { Row, Col } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons"; // Importo ikonën
import SearchBar from "./SearchBar";
import CreateJobsiteButton from "./CreateJobsiteButton";

function JobsiteHeader() {
  return (
    <div className="container mt-3">
      <Row className="align-items-center">
        {/* Ikona e informacionit dhe teksti informativ */}
        <Col xs={4} className="d-flex align-items-center">
          <InfoCircle size={18} className="text-primary me-2" /> {/* Ikona */}
          <span className="text-muted">
            Informative piece of text that can be used regarding this modal.
          </span>
        </Col>

        {/* Fusha e kërkimit */}
        <Col xs={5}>
          <SearchBar />
        </Col>

        {/* Butoni "Create" */}
        <Col xs={3} className="text-end">
          <CreateJobsiteButton />
        </Col>
      </Row>
    </div>
  );
}

export default JobsiteHeader;
