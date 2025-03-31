import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addJobsite } from "../redux/jobsiteSlice";
import { FaTimes, FaCheck } from "react-icons/fa"; // Ikonat për butonat

function CreateJobsiteButton() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  // Funksione për hapjen dhe mbylljen e modalit
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Funksioni për të ruajtur jobsite-in e ri
  const handleAddJobsite = () => {
    if (!name || !status || !category) {
      alert("Please enter all fields");
      return;
    }

    const newJobsite = {
      id: Math.random(),
      name,
      status,
      category,
    };

    dispatch(addJobsite(newJobsite));
    handleClose(); // Mbyll modalin pas ruajtjes
  };

  return (
    <div className="text-end mt-3">
      <Button variant="success" onClick={handleShow}>
        Create +
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Teksti informues */}
          <Form.Text className="text-muted d-block mb-3">
            <i className="bi bi-info-circle text-primary me-2"></i> Informative piece of text that can be used regarding this modal.
          </Form.Text>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type the jobsite's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Row>
            {/* Category Included */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Category Included</Form.Label>
                <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Sidewalk Shed">Sidewalk Shed</option>
                  <option value="Scaffold">Scaffold</option>
                  <option value="Shoring">Shoring</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Status */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Select one</option>
                  <option value="On Road">On Road</option>
                  <option value="Completed">Completed</option>
                  <option value="On Hold">On Hold</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <FaTimes className="me-1" /> Cancel Changes
          </Button>
          <Button variant="success" onClick={handleAddJobsite}>
            <FaCheck className="me-1" /> Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateJobsiteButton;
