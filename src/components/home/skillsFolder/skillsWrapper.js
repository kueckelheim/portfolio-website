import React, { Component } from "react";
import "./skillsWrapper.scss";

import Skills from "./skills/skills.js";
import Strengths from "./strengths/strengths.js";

class SkillsWrapper extends Component {
  render() {
    return (
      <div className="skillsWrapper">
        <div className="headline">SKILLS</div>
        <div className="underline" />
        <div className="grid">
          <Strengths />
          <Skills />
        </div>
      </div>
    );
  }
}

export default SkillsWrapper;
