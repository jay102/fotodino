import React, { useEffect, useState, useMemo } from "react";
import "./style.scss";
import { connect, useDispatch } from "react-redux";
import { locationActions } from "../../redux/actions";
import Search from "../../components/search/Search";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Delete from "../../components/modals/delete/Delete";
import Create from "../../components/modals/location/Create";
import Card from "../../components/card/Card";
import moment from "moment";
const {
  fetchAllLocations,
  deleteSingleLocation,
  clearDeleteMessage,
} = locationActions;

const Locations = ({
  data: { allLocations, deletedLocation, newLocation },
  history,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [itemId, setItemId] = useState();
  const handleClosemodal = () => setShowDeleteModal(false);
  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleShowModal = (id) => {
    setItemId(id);
    setShowDeleteModal(true);
  };
  const dispatch = useDispatch();

  const deleteLocation = () => {
    dispatch(deleteSingleLocation(itemId));
    handleClosemodal();
  };
  const handleSearchQuery = (event) => {
    const q = event.target.value.substr(0, 20);
    setSearchQuery(q);
  };
  useEffect(() => {
    dispatch(fetchAllLocations());
  }, [dispatch]);
  useEffect(() => {
    if (deletedLocation) {
      alert("location deleted");
      dispatch(clearDeleteMessage());
      dispatch(fetchAllLocations());
    }
    if (newLocation) {
      dispatch(fetchAllLocations());
    }
  }, [dispatch, deletedLocation, newLocation]);
  let filteredLocations;
  filteredLocations = useMemo(() => {
    return allLocations?.filter(
      (location) =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allLocations, searchQuery]);
  return (
    <div className="app__locations">
      {showModal && (
        <Delete
          show={showModal}
          item="Location"
          handleClose={handleClosemodal}
          deleteItem={deleteLocation}
        />
      )}
      {showCreateModal && (
        <Create show={showCreateModal} handleClose={handleCloseCreateModal} />
      )}
      <Card
        title="Locations"
        buttonOneLabel="Create Location"
        buttonOneHandler={handleShowCreateModal}
      >
        <Search value={searchQuery} handleChange={handleSearchQuery} />
        <Table responsive hover className="locations_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>RENT</th>
              <th>TIME ADDED</th>
              <th>CITY</th>
              <th>STREET NAME</th>
              <th>STREET NUMBER</th>
              <th>STATUS</th>
              <th>POSTAL CODE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredLocations?.map((location) => {
              return (
                <tr key={location.id}>
                  <td>
                    <p>{location.id}</p>
                  </td>
                  <td>
                    <p>{location.name}</p>
                  </td>
                  <td>
                    <p>{location.email}</p>
                  </td>
                  <td>
                    <p>{location.rent}</p>
                  </td>
                  <td>
                    <p>{moment(location.time_added).format("LL")}</p>
                  </td>
                  <td>
                    <p>{location.city}</p>
                  </td>
                  <td>
                    <p>{location.street_name}</p>
                  </td>
                  <td>
                    <p>{location.street_number}</p>
                  </td>
                  <td>
                    {" "}
                    <div
                      className={`status ${
                        location.status === "Available"
                          ? "successful"
                          : "failed"
                      }`}
                    >
                      {location.status}
                    </div>
                  </td>
                  <td>
                    <p>{location.postal_code}</p>
                  </td>
                  <td>
                    <div className="actions">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                          history.push(`/locations/${location.id}`)
                        }
                      >
                        View
                      </Button>
                      <Button
                        onClick={() => handleShowModal(location.id)}
                        variant="danger"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.location,
});
export default connect(mapStateToProps)(Locations);
