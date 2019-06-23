import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.scss";

import Home from "./components/home/home.js";
import Impressum from "./components/impressum/impressum.js";
import Privacy from "./components/privacy/privacy.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/privacy-policy" component={Privacy} />
        </Switch>
      </Router>
    );
  }
}

export default App;
