import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Top from "./top/top.js";

class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <Helmet>
          <title>Erik Kückelheim</title>
          <meta name="description" content="Frontend Web Developer" />
        </Helmet>
        <Top />
      </main>
    );
  }
}

export default Home;
