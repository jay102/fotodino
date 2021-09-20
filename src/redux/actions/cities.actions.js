import { cityTypes } from "../types";
import { citiesServices } from "../services";
import { errorObject } from "../../utils";
const {
  fetchCities,
  fetchCity,
  updateCity,
  deleteCity,
  createCity,
  filterCities,
} = citiesServices;
const loadingStart = () => {
  return { type: cityTypes.LOADING_START };
};
const loadingStop = () => {
  return { type: cityTypes.LOADING_STOP };
};
const createNewCity = (city_data) => {
  const success = (payload) => {
    return { type: cityTypes.CREATE_NEW_CITY_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: cityTypes.CREATE_NEW_CITY_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await createCity(city_data);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const fetchAllCities = () => {
  const success = (payload) => {
    return { type: cityTypes.FETCH_ALL_CITIES_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: cityTypes.FETCH_ALL_CITIES_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await fetchCities();
      res.length = 20;
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const fetchSingleCity = (city_id) => {
  const success = (payload) => {
    return { type: cityTypes.FETCH_CITY_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: cityTypes.FETCH_CITY_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await fetchCity(city_id);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const updateSingleCity = (city_id, city_data) => {
  const success = (payload) => {
    return { type: cityTypes.UPDATE_CITY_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: cityTypes.UPDATE_CITY_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await updateCity(city_id, city_data);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const deleteSingleCity = (city_id) => {
  const success = (payload) => {
    return { type: cityTypes.DELETE_CITY_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: cityTypes.DELETE_CITY_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await deleteCity(city_id);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const filterAllCities = (filter_data) => {
  const success = (payload) => {
    return { type: cityTypes.FILTER_ALL_CITIES_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: cityTypes.FILTER_ALL_CITIES_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await filterCities(filter_data);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
export const citiesActions = {
  fetchAllCities,
  fetchSingleCity,
  updateSingleCity,
  deleteSingleCity,
  createNewCity,
  filterAllCities,
};
