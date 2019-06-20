import React, { Component } from "react";

import "../../config/animate.min.css";
import "./menuBtn.scss";

class MenuBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClass: "btn",
      btnClassClose: "btn close hide",
      showMenu: false,
      navClass: "navBar",
      navLiClass: "navLi"
    };
  }

  handleClick = e => {
    if (!this.state.showMenu) {
      this.setState({
        btnClass: "btn hide",
        btnClassClose: "btn close",
        showMenu: true,
        navClass: "navBar show",
        navLiClass: "navLi"
      });
    } else {
      this.setState({
        btnClass: "btn",
        btnClassClose: "btn close hide",
        showMenu: false,
        navClass: "navBar",
        navLiClass: "navLi"
      });
    }
    if (e.currentTarget.id === "projects") {
      this.props.onClickProjects();
    }
    if (e.currentTarget.id === "contact") {
      this.props.onClickFooter();
    }
    if (e.currentTarget.id === "skills") {
      this.props.onClickSkills();
    }
  };

  render() {
    return (
      <div className="btnMenu">
        <div className={this.state.btnClass} onClick={this.handleClick}>
          <div className="btnLine" />
          <div className="btnLine" />
          <div className="btnLine" />
        </div>
        <div className={this.state.btnClassClose} onClick={this.handleClick}>
          <div className="btnLine" />
          <div className="btnLine" />
        </div>
        <div className={this.state.navClass}>
          <div
            className={this.state.navLiClass}
            onClick={this.handleClick}
            id="projects"
          >
            Projects
          </div>
          <div
            className={this.state.navLiClass}
            onClick={this.handleClick}
            id="skills"
          >
            Skills
          </div>
          <div
            className={this.state.navLiClass}
            onClick={this.handleClick}
            id="contact"
          >
            Contact
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBtn;
