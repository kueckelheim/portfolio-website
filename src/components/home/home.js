import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./home.scss";

import Header from "../header/header.js";
import Top from "./top/top.js";
// import What from "./what/what.js";
import SkillsWrapper from "./skillsFolder/skillsWrapper.js";
import Projects from "./projects/projects.js";
import Footer from "./footer/footer.js";

import { Controller, Scene } from "react-scrollmagic";

class Home extends Component {
  constructor(props) {
    super(props);

    this.myProjects = React.createRef();
    this.footer = React.createRef();
    this.skills = React.createRef();
    this.top = React.createRef();
  }

  handleClickProjects = event => {
    if (this.myProjects.current) {
      this.myProjects.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  handleClickFooter = event => {
    if (this.footer.current) {
      this.footer.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  handleClickSkills = event => {
    if (this.skills.current) {
      this.skills.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  handleClickTop = event => {
    if (this.top.current) {
      this.top.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  render() {
    return (
      <main>
        <Helmet>
          <title>Erik Kückelheim Web Developer in Germany, Constance</title>
          <meta
            name="description"
            content="Javascript Developer in the Lake Constance region in Germany."
          />
        </Helmet>
        <div ref={this.top}>
          <Top
            onClickProjects={() => this.handleClickProjects()}
            onClickFooter={() => this.handleClickFooter()}
          />
        </div>
        <Controller>
          <Scene pin={true} triggerHook="onLeave">
            <div className="front">
              <Header
                onClickFooter={() => this.handleClickFooter()}
                onClickProjects={() => this.handleClickProjects()}
                onClickSkills={() => this.handleClickSkills()}
                onClickTop={() => this.handleClickTop()}
              />
            </div>
          </Scene>
        </Controller>
        {/* <What /> */}
        <div ref={this.myProjects} id="projects">
          <Projects onLoaded={() => this.onLoaded()} />
        </div>
        <div ref={this.skills} id="skills">
          <SkillsWrapper />
        </div>

        <div ref={this.footer} id="contact">
          <Footer />
        </div>
      </main>
    );
  }
}

export default Home;
