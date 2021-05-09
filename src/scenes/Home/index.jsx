import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GifsLibrary from "../GifsLibrary";
import MyLibrary from "../MyLibrary";

const Home = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/gifs-library" />
      </Route>
      <Route exact path="/gifs-library" component={GifsLibrary} />
      <Route exact path="/my-library" component={MyLibrary} />
    </Switch>
  );
};

export default Home;
