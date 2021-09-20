import { locationTypes } from "../types";
import { locationServices } from "../services";
import { errorObject } from "../../utils";
const {
  fetchLocations,
  fetchLocation,
  updateLocation,
  deleteLocation,
  createLocation,
  filterLocations,
} = locationServices;
const loadingStart = () => {
  return { type: locationTypes.LOADING_START };
};
const loadingStop = () => {
  return { type: locationTypes.LOADING_STOP };
};
const createNewLocation = (location_data) => {
  const success = (payload) => {
    return { type: locationTypes.CREATE_NEW_LOCATION_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: locationTypes.CREATE_NEW_LOCATION_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await createLocation(location_data);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const fetchAllLocations = () => {
  const success = (payload) => {
    return { type: locationTypes.FETCH_ALL_LOCATION_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: locationTypes.FETCH_ALL_LOCATION_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await fetchLocations();
      res.length = 20;
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const fetchSingleLocation = (location_id) => {
  const success = (payload) => {
    return { type: locationTypes.FETCH_LOCATION_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: locationTypes.FETCH_LOCATION_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await fetchLocation(location_id);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const updateSingleLocation = (location_id, location_data) => {
  const success = (payload) => {
    return { type: locationTypes.UPDATE_LOCATION_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: locationTypes.UPDATE_LOCATION_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await updateLocation(location_id, location_data);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const deleteSingleLocation = (location_id) => {
  const success = (payload) => {
    return { type: locationTypes.DELETE_LOCATION_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: locationTypes.DELETE_LOCATION_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      await deleteLocation(location_id);
      dispatch(loadingStop());
      dispatch(success("location deleted!"));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const filterAllLocations = (filter_data) => {
  const success = (payload) => {
    return { type: locationTypes.FILTER_ALL_LOCATIONS_SUCCESS, payload };
  };
  const failure = (payload) => {
    return { type: locationTypes.FILTER_ALL_LOCATIONS_ERROR, payload };
  };
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const res = await filterLocations(filter_data);
      dispatch(loadingStop());
      dispatch(success(res));
    } catch (err) {
      dispatch(loadingStop());
      errorObject(err, dispatch, failure);
    }
  };
};
const clearUpdateMessage = () => (dispatch) => {
  dispatch({ type: locationTypes.CLEAR_AFTER_LOCATION_UPDATE });
};
const clearDeleteMessage = () => (dispatch) => {
  dispatch({ type: locationTypes.CLEAR_AFTER_LOCATION_DELETION });
};
const clearCreateMessage = () => (dispatch) => {
  dispatch({ type: locationTypes.CLEAR_AFTER_LOCATION_CREATION });
};
export const locationActions = {
  fetchAllLocations,
  fetchSingleLocation,
  updateSingleLocation,
  deleteSingleLocation,
  createNewLocation,
  filterAllLocations,
  clearUpdateMessage,
  clearDeleteMessage,
  clearCreateMessage,
};
