import axios from "axios";
import { BASE_URL } from "./index";

const fetchLocations = () => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/locations/`,
  }).then((response) => response.data);
};
const fetchLocation = (id) => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/locations/${id}`,
  }).then((response) => response.data);
};
const createLocation = (location_data) => {
  return axios({
    method: "POST",
    url: `${BASE_URL}/locations/`,
    data: location_data,
  }).then((response) => response.data);
};
const updateLocation = (id, location_data) => {
  return axios({
    method: "PUT",
    url: `${BASE_URL}/locations/${id}/`,
    data: location_data,
  }).then((response) => response.data);
};
const deleteLocation = (id) => {
  return axios({
    method: "DELETE",
    url: `${BASE_URL}/locations/${id}`,
  }).then((response) => response.data);
};
const filterLocations = (filter_data) => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/locations`,
    data: filter_data,
  }).then((response) => response.data);
};
export const locationServices = {
  fetchLocations,
  fetchLocation,
  createLocation,
  updateLocation,
  deleteLocation,
  filterLocations,
};
