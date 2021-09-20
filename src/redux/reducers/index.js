import { combineReducers } from "redux";
import { citiesReducer } from "./cities.reducer";
import { locationsReducer } from "./location.reducer";
const rootReducer = combineReducers({
  location: locationsReducer,
  cities: citiesReducer,
});
export default rootReducer;
