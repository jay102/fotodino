import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import Locations from "./pages/locations/locations";
import Cities from "./pages/cities/Cities";
import Location from "./pages/location/Location";
import City from "./pages/city/City";
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Locations} />
        <Route exact path="/cities" component={Cities} />
        <Route exact path="/locations/:id" component={Location} />
        <Route exact path="/cities/:id" component={City} />
      </Switch>
    </Router>
  );
};

export default Routes;
