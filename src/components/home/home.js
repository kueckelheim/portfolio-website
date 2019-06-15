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
import { Tween } from "react-gsap";
import "../../config/animate.min.css";

class Home extends Component {
  constructor(props) {
    super(props);

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

  render() {
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
        <div id="triggerNav" />
        <div>
          <Header />
        </div>
        <What />
        <SkillsWrapper />
        <div ref={this.myProjects}>
          <Projects />
        </div>

        <div ref={this.footer}>
          <Footer />
        </div>
      </main>
    );
  }
}

export default Home;
