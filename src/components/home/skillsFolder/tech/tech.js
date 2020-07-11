import React, { Component } from "react";
import "./tech.scss";

class Tech extends Component {
  state = {};
  render() {
    return (
      <div className="techWrapper">
        <h3>Other Technologies I have worked with:</h3>
        <div className="items">
          <div className="item">tailwindcss</div>
          <div className="item">GitHub Actions</div>
          <div className="item">git</div>
          <div className="item">Amazon Web Services</div>
          <div className="item">scss</div>
          <div className="item">handlebarsjs</div>
          <div className="item">storybook</div>
          <div className="item">GitLab</div>
          <div className="item">MongoDB</div>
        </div>
      </div>
    );
  }
}

export default Tech;
