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
            <div className="name">Docker</div>
            <div className="bar">
              <div id="triggerBar" />
              <Controller>
                <Scene
                  classToggle="docker"
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
            <div className="name">Webpack</div>
            <div className="bar">
              <div id="triggerBar" />
              <Controller>
                <Scene
                  classToggle="webpack"
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
            <div className="name">Node.js</div>
            <div className="bar">
              <Controller>
                <Scene
                  classToggle="node"
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
            <div className="name">Express</div>
            <div className="bar">
              <Controller>
                <Scene
                  classToggle="express"
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
            <div className="name">REST API</div>
            <div className="bar">
              <Controller>
                <Scene
                  classToggle="rest"
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
