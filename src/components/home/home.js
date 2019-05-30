import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Erik Kückelheim</title>
          <meta name="description" content="Frontend Web Developer" />
        </Helmet>
        <div className="container">test</div>
      </React.Fragment>
    );
  }
}

export default Home;
