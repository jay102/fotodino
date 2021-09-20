import { cityTypes } from "../types";
const initialState = {
  loading: false,
};
const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case cityTypes.LOADING_START:
      return { ...state, loading: true };
    case cityTypes.LOADING_STOP:
      return { ...state, loading: false };
    case cityTypes.FETCH_ALL_CITIES_SUCCESS:
      return { ...state, allCities: action.payload };
    case cityTypes.FETCH_ALL_CITIES_ERROR:
      return { ...state, allCitiesError: action.payload };
    case cityTypes.FETCH_CITY_SUCCESS:
      return { ...state, city: action.payload };
    case cityTypes.FETCH_CITY_ERROR:
      return { ...state, cityError: action.payload };
    case cityTypes.CREATE_NEW_CITY_SUCCESS:
      return { ...state, newCity: action.payload };
    case cityTypes.CREATE_NEW_CITY_ERROR:
      return { ...state, newCityError: action.payload };
    case cityTypes.CLEAR_AFTER_CITY_CREATION:
      return { ...state, newCity: null, newCityError: null };
    case cityTypes.UPDATE_CITY_SUCCESS:
      return { ...state, updatedCity: action.payload };
    case cityTypes.UPDATE_CITY_ERROR:
      return { ...state, updateCityError: action.payload };
    case cityTypes.CLEAR_AFTER_CITY_UPDATE:
      return { ...state, updatedCity: null, updateCityError: null };
    case cityTypes.DELETE_CITY_SUCCESS:
      return { ...state, deletedCity: action.payload };
    case cityTypes.DELETE_CITY_ERROR:
      return { ...state, deleteCityError: action.payload };
    case cityTypes.CLEAR_AFTER_CITY_DELETION:
      return { ...state, deleteCityError: null, deletedCity: null };
    default:
      return state;
  }
};
export { citiesReducer };
