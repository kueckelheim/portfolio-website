import React, { Component } from "react";
import "./skills.scss";

import { Controller, Scene } from "react-scrollmagic";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills">
        <div className="skillWrapper">
          <div className="skill">
            <div className="name">CSS</div>
            <div className="bar">
              <div id="triggerBar" />
              <Controller>
                <Scene
                  classToggle="css"
                  triggerElement="#triggerBar"
                  // reverse={false}
                  triggerHook="onEnter"
                >
                  {() => <div className="fill" />}
                </Scene>
              </Controller>
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">HTML</div>
            <div className="bar">
              <Controller>
                <Scene
                  classToggle="html"
                  triggerElement="#triggerBar"
                  // reverse={false}
                  triggerHook="onEnter"
                >
                  {() => <div className="fill" />}
                </Scene>
              </Controller>
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">JavaScript</div>
            <div className="bar">
              <Controller>
                <Scene
                  classToggle="js"
                  triggerElement="#triggerBar"
                  // reverse={false}
                  triggerHook="onEnter"
                >
                  {() => <div className="fill" />}
                </Scene>
              </Controller>
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">ReactJS</div>
            <div className="bar">
              <Controller>
                <Scene
                  classToggle="react"
                  triggerElement="#triggerBar"
                  // reverse={false}
                  triggerHook="onEnter"
                >
                  {() => <div className="fill" />}
                </Scene>
              </Controller>
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">R</div>
            <div className="bar">
              <Controller>
                <Scene
                  classToggle="r"
                  triggerElement="#triggerBar"
                  // reverse={false}
                  triggerHook="onEnter"
                >
                  {() => <div className="fill" />}
                </Scene>
              </Controller>
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">Django</div>
            <div className="bar">
              <Controller>
                <Scene
                  classToggle="django"
                  triggerElement="#triggerBar"
                  // reverse={false}
                  triggerHook="onEnter"
                >
                  {() => <div className="fill" />}
                </Scene>
              </Controller>
              <div className="percentage" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
