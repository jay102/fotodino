import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Delete = ({ show, handleClose, deleteItem, item }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Confirm delete</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete {item}?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={deleteItem}>
          Delete {item}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Delete;
