import React, { Component } from "react";
import "./skills.scss";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills">
        <div className="headline">SKILLS</div>
        <div className="underline" />

        <div className="grid">
          <div className="skill">
            <div className="name">CSS</div>
            <div className="bar">
              <div className="fill css" />
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">HTML</div>
            <div className="bar">
              <div className="fill html" />
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">JavaScript</div>
            <div className="bar">
              <div className="fill js" />
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">ReactJS</div>
            <div className="bar">
              <div className="fill react" />
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">R</div>
            <div className="bar">
              <div className="fill r" />
              <div className="percentage" />
            </div>
          </div>

          <div className="skill">
            <div className="name">Django</div>
            <div className="bar">
              <div className="fill django" />
              <div className="percentage" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
