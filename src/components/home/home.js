import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./home.scss";

import Header from "../header/header.js";
import Top from "./top/top.js";
import What from "./what/what.js";
import SkillsWrapper from "./skillsFolder/skillsWrapper.js";
import Projects from "./projects/projects.js";
import Footer from "./footer/footer.js";

import { Controller, Scene } from "react-scrollmagic";
// import { Tween } from "react-gsap";

import ZIndex from "react-z-index";

import "../../config/animate.min.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.myProjects = React.createRef();
    this.footer = React.createRef();
  }

  handleClickProjects = event => {
    if (this.myProjects.current) {
      this.myProjects.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };
  handleClickFooter = event => {
    if (this.footer.current) {
      this.footer.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };
  onLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    let LazyHeader;
    if (this.state.loaded) {
      LazyHeader = (
        <ZIndex top important>
          <Header />
        </ZIndex>
      );
    } else {
      LazyHeader = null;
    }
    return (
      <main>
        <Helmet>
          <title>Erik Kückelheim</title>
          <meta name="description" content="Frontend Web Developer" />
        </Helmet>
        <Top
          onClickProjects={() => this.handleClickProjects()}
          onClickFooter={() => this.handleClickFooter()}
        />
        <Controller>
          <Scene pin={true} triggerHook="onLeave">
            <div>{LazyHeader}</div>
          </Scene>
        </Controller>
        <What />
        <SkillsWrapper />
        <div ref={this.myProjects}>
          <ZIndex bottom>
            <Projects onLoaded={() => this.onLoaded()} />
          </ZIndex>
          >
        </div>

        <div ref={this.footer}>
          <Footer />
        </div>
      </main>
    );
  }
}

export default Home;
