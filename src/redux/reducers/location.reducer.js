import { locationTypes } from "../types";
const initialState = {
  loading: false,
};
const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case locationTypes.LOADING_START:
      return { ...state, loading: true };
    case locationTypes.LOADING_STOP:
      return { ...state, loading: false };
    case locationTypes.FETCH_ALL_LOCATION_SUCCESS:
      return { ...state, allLocations: action.payload };
    case locationTypes.FETCH_ALL_LOCATION_ERROR:
      return { ...state, allLocationsError: action.payload };
    case locationTypes.FILTER_ALL_LOCATIONS_SUCCESS:
      return { ...state, allLocations: action.payload };
    case locationTypes.FILTER_ALL_LOCATIONS_ERROR:
      return { ...state, allLocationsError: action.payload };
    case locationTypes.FETCH_LOCATION_SUCCESS:
      return { ...state, location: action.payload };
    case locationTypes.FETCH_LOCATION_ERROR:
      return { ...state, locationError: action.payload };
    case locationTypes.CREATE_NEW_LOCATION_SUCCESS:
      return { ...state, newLocation: action.payload };
    case locationTypes.CREATE_NEW_LOCATION_ERROR:
      return { ...state, newLocationError: action.payload };
    case locationTypes.CLEAR_AFTER_LOCATION_CREATION:
      return { ...state, newLocation: null, newLocationError: null };
    case locationTypes.UPDATE_LOCATION_SUCCESS:
      return { ...state, updatedLocation: action.payload };
    case locationTypes.UPDATE_LOCATION_ERROR:
      return { ...state, updateLocationError: action.payload };
    case locationTypes.CLEAR_AFTER_LOCATION_UPDATE:
      return { ...state, updatedLocation: null, updateLocationError: null };
    case locationTypes.DELETE_LOCATION_SUCCESS:
      return { ...state, deletedLocation: action.payload };
    case locationTypes.DELETE_LOCATION_ERROR:
      return { ...state, deleteLocationError: action.payload };
    case locationTypes.CLEAR_AFTER_LOCATION_DELETION:
      return { ...state, deleteLocationError: null, deletedLocation: null };
    default:
      return state;
  }
};
export { locationsReducer };
