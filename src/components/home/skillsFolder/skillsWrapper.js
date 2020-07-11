import React, { Component } from "react";
import "./skillsWrapper.scss";

import Skills from "./skills/skills.js";
import Tech from "./tech/tech.js";
// import Strengths from "./strengths/strengths.js";

import { Controller, Scene } from "react-scrollmagic";

class SkillsWrapper extends Component {
  render() {
    return (
      <div className="skillsWrapper">
        <div id="triggerSkills" />
        <Controller>
          <Scene
            classToggle="animated"
            triggerElement="#triggerSkills"
            // reverse={false}
            triggerHook="onCenter"
          >
            {() => <div className="headline">SKILLS</div>}
          </Scene>
          <Scene
            classToggle="animated"
            triggerElement="#triggerSkills"
            // reverse={false}
            triggerHook="onCenter"
          >
            <div className="underline" />
          </Scene>
          <div className="grid">
            <Skills />
            <Tech />
          </div>
        </Controller>
      </div>
    );
  }
}

export default SkillsWrapper;
