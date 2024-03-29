import "./HomePage.scss";

import React from "react";
import Form from "../../components/Form/Form";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Form} />
          <Route path="/employment" component={Form} />
          <Route path="/goal" component={Form} />
          <Route path="/recommendation " component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Homepage;
