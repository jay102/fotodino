import axios from "axios";
import { BASE_URL } from "./index";
const fetchCities = () => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/cities/`,
  }).then((response) => response.data);
};
const fetchCity = (city_id) => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/cities/${city_id}`,
  }).then((response) => response.data);
};
const createCity = (city_data) => {
  return axios({
    method: "POST",
    url: `${BASE_URL}/cities/`,
    data: city_data,
  }).then((response) => response.data);
};
const updateCity = (city_id, city_data) => {
  return axios({
    method: "PUT",
    url: `${BASE_URL}/cities/${city_id}`,
    data: city_data,
  }).then((response) => response.data);
};
const deleteCity = (city_id) => {
  return axios({
    method: "DELETE",
    url: `${BASE_URL}/cities/${city_id}`,
  }).then((response) => response.data);
};
const filterCities = (filter_data) => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/cities/`,
    data: filter_data,
  }).then((response) => response.data);
};
export const citiesServices = {
  fetchCities,
  fetchCity,
  createCity,
  updateCity,
  deleteCity,
  filterCities,
};
