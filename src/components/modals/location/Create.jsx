import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, connect } from "react-redux";
import { locationActions } from "../../../redux/actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const { createNewLocation, clearCreateMessage } = locationActions;

const Create = ({ show, handleClose, data: { newLocation } }) => {
  const dispatch = useDispatch();
  const [locationData, setLocationData] = useState({
    city: "",
    coordinates: "",
    email: "",
    name: "",
    phone: "",
    postal_code: "",
    rent: "",
    time_added: "",
    status: "",
    street_name: "",
    street_number: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationData({ ...locationData, [name]: value });
  };
  const createLocation = () => {
    dispatch(createNewLocation(locationData));
  };
  useEffect(() => {
    let timeout;
    if (newLocation) {
      setLocationData({
        city: "",
        coordinates: "",
        email: "",
        name: "",
        phone: "",
        postal_code: "",
        rent: "",
        time_added: "",
        status: "",
        street_name: "",
        street_number: "",
      });
      timeout = setTimeout(() => {
        clearCreateMessage();
      }, 4000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [newLocation]);
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Create Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {newLocation && `location has been created!`}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={handleChange}
                name="name"
                value={locationData?.name}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="email"
                onChange={handleChange}
                value={locationData?.email}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Rent
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="rent"
                onChange={handleChange}
                value={locationData?.rent}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Phone
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="phone"
                onChange={handleChange}
                value={locationData?.phone}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Street name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="street_name"
                onChange={handleChange}
                value={locationData?.street_name}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Street number
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={handleChange}
                name="street_number"
                value={locationData?.street_number}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Status
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="status"
                onChange={handleChange}
                value={locationData?.status}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Postal Code
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="postal_code"
                onChange={handleChange}
                value={locationData?.postal_code}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Time added
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="time_added"
                onChange={handleChange}
                value={locationData?.time_added}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              City
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={handleChange}
                name="city"
                value={locationData?.city}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Coordinates
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={handleChange}
                name="coordinates"
                value={locationData?.coordinates}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={createLocation}>
          Create Location
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
const mapStateToProps = (state) => ({
  data: state.location,
});
export default connect(mapStateToProps)(Create);
