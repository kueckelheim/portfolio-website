import React, { Component } from "react";
import "./projects.scss";

import { Controller, Scene } from "react-scrollmagic";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          overlayClass: "overlay",
        },
        {
          overlayClass: "overlay",
        },
        {
          overlayClass: "overlay",
        },
      ],
    };
  }

  handleClick = (e) => {
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
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <div className="project">
                  <div className="visible" onClick={this.handleClick} id={1}>
                    <div className="imgWrapper">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/image/jschallenger.png"
                        }
                        alt="Responsive Grid Generator by Erik Kückelheim"
                      />
                    </div>
                    <div className="bottom1">jschallenger.com</div>
                  </div>
                  <div className={this.state.projects[1].overlayClass}>
                    <div className="wrapper">
                      <div className="overlayName">
                        jschallenger.com
                      </div>
                      <div className="flex">
                        <div className="skill">Javascript</div>
                        <div className="skill">node.js</div>
                        <div className="skill">express</div>
                        <div className="skill">tailwind</div>
                        <div className="skill">handlebars</div>
                        <div className="skill">AWS</div>
                        <div className="skill">MongoDB</div>
                      </div>
                      <p>
                        Fully server-side rendered project with a zero-dependency frontend and Node.js-backend that connects to a MongoDB. Continous Delivery with GitHub Actions.
                      </p>

                      <div className="buttonWrapper">
                        <a
                          href="https://www.jschallenger.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button1">VISIT</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <div className="project">
                  <div className="visible" onClick={this.handleClick} id={1}>
                    <div className="imgWrapper">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/image/responsive-grid-generator.png"
                        }
                        alt="Responsive Grid Generator by Erik Kückelheim"
                      />
                    </div>
                    <div className="bottom1">Responsive Grid Generator</div>
                  </div>
                  <div className={this.state.projects[1].overlayClass}>
                    <div className="wrapper">
                      <div className="overlayName">
                        Responsive Grid Generator
                      </div>
                      <div className="flex">
                        <div className="skill">ReactJS</div>
                        <div className="skill">Redux</div>
                        <div className="skill">scss</div>
                      </div>
                      <p>
                        A clickable grid generator. Website-layout
                        creation with an intuitive and interactive tool.
                        Drag-to-select area selection and output preview on
                        different screen sizes.
                      </p>

                      <div className="buttonWrapper">
                        <a
                          href="https://responsive-grid-generator.netlify.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button1">VISIT</div>
                        </a>
                        <a
                          href="https://github.com/kueckelheim/responsive-grid-generator"
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
                <div className="project">
                  <div className="visible" onClick={this.handleClick} id={0}>
                    <div className="imgWrapper">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/image/wandermaidsontour2.png"
                        }
                        alt="Erik Kueckelheim web developer"
                      />
                      <div className="bottom1">wandermaidsontour.de</div>
                    </div>
                  </div>
                  <div className={this.state.projects[0].overlayClass}>
                    <div className="wrapper">
                      <div className="overlayName">wandermaidsontour.de</div>
                      <div className="flex">
                        <div className="skill">ReactJS</div>
                        <div className="skill">Redux</div>
                        <div className="skill">R</div>
                        <div className="skill">scss</div>
                      </div>
                      <p>
                        A fully customized blog page written in ReactJS with
                        Redux state management.
                      </p>
                      <p></p>
                      <div className="buttonWrapper">
                        <a
                          href="https://www.wandermaidsontour.de/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button1">VISIT</div>
                        </a>
                        <a
                          href="https://github.com/kueckelheim/wandermaids"
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
                        My single-page responsive portfolio website with
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
