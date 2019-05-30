import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.scss";

import Home from "./components/home/home.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
