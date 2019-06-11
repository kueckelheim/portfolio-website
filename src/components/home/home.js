import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./home.scss";

import Header from "../header/header.js";
import Top from "./top/top.js";
import What from "./what/what.js";
import Skills from "./skills/skills.js";
import Strengths from "./strengths/strengths.js";

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
        <Top />
        <div id="triggerNav" />
        <Controller>
          <Scene Duration={10000} triggerHook="onLeave" pin classToggle="shown">
            {progress => (
              <div>
                <Header />
              </div>
            )}
          </Scene>
          <What />
          <Skills />
          <Strengths />
        </Controller>
      </main>
    );
  }
}

export default Home;
