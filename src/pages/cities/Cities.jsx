import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { citiesActions } from "../../redux/actions";
const { fetchAllCities } = citiesActions;

const Cities = ({ data: { allCities } }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
  }, [dispatch]);

  console.log(allCities, "allCities");

  return <div className="app__cities">Cities</div>;
};
const mapStateToProps = (state) => ({
  data: state.cities,
});
export default connect(mapStateToProps)(Cities);
