import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./home.scss";

import Header from "../header/header.js";
import Top from "./top/top.js";
import AboutMe from "./aboutMe/aboutMe.js";

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import "../../config/animate.min.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <Helmet>
          <title>Erik Kückelheim</title>
          <meta name="description" content="Frontend Web Developer" />
        </Helmet>

        <Controller>
          <Scene triggerElement="#trigger" triggerHook="onLeave">
            {progress => (
              <Tween
                from={{ className: "invisible" }}
                to={{
                  className: ""
                }}
                totalProgress={progress}
                paused
              >
                <div>
                  <Header />
                </div>
              </Tween>
            )}
          </Scene>
        </Controller>
        <Top />
        <div id="triggerNav" />

        <AboutMe />
      </main>
    );
  }
}

export default Home;
