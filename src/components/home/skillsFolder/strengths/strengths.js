import React, { Component } from "react";
import "./strengths.scss";

import { Controller, Scene } from "react-scrollmagic";

class Strengths extends Component {
  state = {};
  render() {
    return (
      <div className="strengths">
        <div id="triggerStrengths" />
        <Controller>
          <Scene
            classToggle="animated"
            triggerElement="#triggerSkills"
            // reverse={false}
            triggerHook="onCenter"
          >
            {() => (
              <div className="strength">
                <div className="hexagon">
                  <div className="hexagon1" />
                  <div className="hexagon2">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/image/responsive design.png"
                      }
                      alt="Erik Kueckelheim web developer"
                    />
                  </div>
                  <div className="hexagon3" />
                </div>
                <div className="descriptionWrapper">
                  <div className="description">
                    <h2>Responsive Design</h2>
                    Nowadays, it is essential to make digital products
                    responsive. My websites are optimized to work and look good
                    on every device.
                  </div>
                </div>
              </div>
            )}
          </Scene>
          <Scene
            classToggle="animated"
            triggerElement="#triggerSkills"
            // reverse={false}
            triggerHook="onCenter"
          >
            {() => (
              <div className="strength">
                <div className="hexagon">
                  <div className="hexagon1" />
                  <div className="hexagon2">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/image/dynamic websites.png"
                      }
                      alt="Erik Kueckelheim web developer"
                    />
                  </div>
                  <div className="hexagon3" />
                </div>
                <div className="descriptionWrapper">
                  <div className="description">
                    <h2>Dynamic Websites</h2>
                    Make your websites interactive! I can help you building
                    complex web applications with modern JavaScript frameworks
                    and backend-frontend communication.
                  </div>
                </div>
              </div>
            )}
          </Scene>
          <Scene
            classToggle="animated"
            triggerElement="#triggerSkills"
            // reverse={false}
            triggerHook="onCenter"
          >
            {() => (
              <div className="strength">
                <div className="hexagon">
                  <div className="hexagon1" />
                  <div className="hexagon2">
                    <img
                      src={process.env.PUBLIC_URL + "/image/intuitive.png"}
                      alt="Erik Kueckelheim web developer"
                    />
                  </div>
                  <div className="hexagon3" />
                </div>
                <div className="descriptionWrapper">
                  <div className="description">
                    <h2>Intuitive</h2>
                    Understand what's going on! I have an intuitive and
                    structured workflow and provide clear and replicable code.
                  </div>
                </div>
              </div>
            )}
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default Strengths;
