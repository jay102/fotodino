import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect, useDispatch } from "react-redux";
import { locationActions } from "../../redux/actions";
import Card from "../../components/card/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const {
  fetchSingleLocation,
  updateSingleLocation,
  clearUpdateMessage,
} = locationActions;

const Location = ({
  match: {
    params: { id },
  },
  data: { location, updatedLocation },
}) => {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(true);
  const [locationData, setLocationData] = useState();
  useEffect(() => {
    dispatch(fetchSingleLocation(id));
  }, [dispatch, id]);
  useEffect(() => {
    let timeout;
    if (location) {
      const {
        city,
        coordinates,
        email,
        name,
        phone,
        postal_code,
        rent,
        status,
        street_name,
        street_number,
        time_added,
      } = location;
      setLocationData({
        city,
        coordinates,
        email,
        name,
        phone,
        postal_code,
        rent,
        time_added,
        status,
        street_name,
        street_number,
      });
    }
    if (updatedLocation) {
      timeout = setTimeout(() => {
        dispatch(clearUpdateMessage());
        dispatch(fetchSingleLocation(id));
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, id, location, updatedLocation]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationData({ ...locationData, [name]: value });
  };
  const updateLocationForm = () => {
    setEditForm(!editForm);
  };
  const updateData = () => {
    dispatch(updateSingleLocation(id, locationData));
  };
  return (
    <div className="app__location">
      <Card
        title={location?.name}
        buttonOneLabel={editForm ? "Edit" : "Cancel Edit"}
        buttonOneHandler={updateLocationForm}
        buttonTwoLabel="Update"
        buttonTwoHandler={updateData}
        back
      >
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                onChange={handleChange}
                name="name"
                readOnly={editForm}
                defaultValue={locationData?.name}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                name="email"
                onChange={handleChange}
                defaultValue={locationData?.email}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Rent
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                name="rent"
                onChange={handleChange}
                defaultValue={locationData?.rent}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Phone
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                name="phone"
                onChange={handleChange}
                defaultValue={locationData?.phone}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Street name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                name="street_name"
                onChange={handleChange}
                defaultValue={locationData?.street_name}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Street number
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                onChange={handleChange}
                name="street_number"
                defaultValue={locationData?.street_number}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Status
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                name="status"
                onChange={handleChange}
                defaultValue={locationData?.status}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Postal Code
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                name="postal_code"
                onChange={handleChange}
                defaultValue={locationData?.postal_code}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Time added
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                name="time_added"
                onChange={handleChange}
                defaultValue={locationData?.time_added}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              City
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                onChange={handleChange}
                name="city"
                defaultValue={locationData?.city}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Coordinates
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext={editForm}
                readOnly={editForm}
                onChange={handleChange}
                name="coordinates"
                defaultValue={locationData?.coordinates}
              />
            </Col>
          </Form.Group>
          {updatedLocation && `${locationData.name} updated!`}
        </Form>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.location,
});
export default connect(mapStateToProps)(Location);
