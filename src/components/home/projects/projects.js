import React, { Component } from "react";
import "./projects.scss";

import { Controller, Scene } from "react-scrollmagic";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          overlayClass: "overlay"
        },
        {
          overlayClass: "overlay"
        },
        {
          overlayClass: "overlay"
        }
      ]
    };
  }

  handleClick = e => {
    const id = e.currentTarget.id;
    let projects = [...this.state.projects];
    projects[id].overlayClass = "overlay show";
    this.setState({ projects });
  };

  render() {
    return (
      <div className="projects">
        <div id="triggerProjects" />
        <Controller>
          <Scene
            classToggle="animated"
            triggerElement="#triggerProjects"
            // reverse={false}
            triggerHook="onCenter"
          >
            {() => <div className="headline">Projects</div>}
          </Scene>
          <Scene
            classToggle="animated"
            triggerElement="#triggerProjects"
            // reverse={false}
            triggerHook="onCenter"
          >
            <div className="underline" />
          </Scene>
          {/* ***************************************************************** */}
          <Scene
            classToggle="animated"
            triggerElement="#triggerProjects"
            // reverse={false}
            triggerHook="onCenter"
          >
            {() => (
              <div className="grid">
                <div className="project">
                  <div className="visible" onClick={this.handleClick} id={0}>
                    <div className="imgWrapper">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/image/meetsoutheast.png"
                        }
                        alt="Erik Kueckelheim web developer"
                      />
                      <div className="bottom1">meetsoutheast.com</div>
                    </div>
                  </div>
                  <div className={this.state.projects[0].overlayClass}>
                    <div className="wrapper">
                      <div className="overlayName">meetsoutheast.com</div>
                      <div className="flex">
                        <div className="skill">ReactJS</div>
                        <div className="skill">Redux</div>
                        <div className="skill">axios</div>
                        <div className="skill">Django</div>
                        <div className="skill">RestAPI</div>
                        <div className="skill">R</div>
                      </div>
                      <p>
                        A fully customized blog page written in ReactJS with a
                        Django-based backend for commenting
                      </p>
                      <div className="buttonWrapper">
                        <a
                          href="https://www.meetsoutheast.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button1">VISIT</div>
                        </a>
                        <a
                          href="https://github.com/kueckelheim/SouthEastAsiaBlog"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button2">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/image/GitHub-Mark-32px.png"
                              }
                              alt="GitHub Icon"
                            />

                            <div>GitHub</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <div
                  className="project"
                  // onMouseEnter={this.onMouseEnter}
                  // onMouseLeave={this.onMouseLeave}
                  // id={1}
                >
                  <div className="visible" onClick={this.handleClick} id={1}>
                    <div className="imgWrapper">
                      <img
                        src={process.env.PUBLIC_URL + "/image/secretpath.png"}
                        alt="Erik Kueckelheim web developer"
                      />
                    </div>
                    <div className="bottom1">
                      Blog Creation Tool (meetsoutheast)
                    </div>
                  </div>
                  <div className={this.state.projects[1].overlayClass}>
                    <div className="wrapper">
                      <div className="overlayName">
                        Blog Creation Tool (meetsoutheast)
                      </div>
                      <div className="flex">
                        <div className="skill">ReactJS</div>
                        <div className="skill">Redux</div>
                      </div>
                      <p>
                        An intuitive tool to create JSON code for new blog
                        articles for{" "}
                        <a href="https://www.meetsoutheast.com/">
                          meetsoutheast.com
                        </a>{" "}
                        that provides a clickable preview of the output.
                      </p>

                      <div className="buttonWrapper">
                        <a
                          href="https://www.meetsoutheast.com/secretpath/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button1">VISIT</div>
                        </a>
                        <a
                          href="https://github.com/kueckelheim/SouthEastAsiaBlog/tree/master/src/components/form"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button2">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/image/GitHub-Mark-32px.png"
                              }
                              alt="GitHub Icon"
                            />

                            <div>GitHub</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <div
                  className="project"
                  // onMouseEnter={this.onMouseEnter}
                  // onMouseLeave={this.onMouseLeave}
                  // id={2}
                >
                  <div className="visible" onClick={this.handleClick} id={2}>
                    <div className="imgWrapper">
                      <img
                        src={process.env.PUBLIC_URL + "/image/portfolio.png"}
                        alt="Erik Kueckelheim web developer"
                      />
                    </div>
                  </div>
                  <div className="bottom1">Portfolio</div>
                  <div className={this.state.projects[2].overlayClass}>
                    <div className="wrapper">
                      <div className="overlayName">Portfolio</div>
                      <div className="flex">
                        <div className="skill">ReactJS</div>
                      </div>
                      <p>
                        My one-page responsive portfolio website with
                        scroll-activated animations. Built with ReactJS, CSS
                        Grid, and react-scrollmagic.
                      </p>
                      <div className="buttonWrapper">
                        <div className="button1">VISIT</div>
                        <a
                          href="https://github.com/kueckelheim/portfolio-website"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button2">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/image/GitHub-Mark-32px.png"
                              }
                              alt="GitHub Icon"
                            />

                            <div>GitHub</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              </div>
            )}
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default Projects;
