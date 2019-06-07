import React, { Component } from "react";

import "../../config/animate.min.css";
import "./menuBtn.scss";

class MenuBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClass: "menu-btn",
      showMenu: false,
      overlayClass: "menu-overlay"
    };
  }

  handleClick = () => {
    if (!this.state.showMenu) {
      this.setState({
        btnClass: "menu-btn close",
        showMenu: true,
        overlayClass: "menu-overlay show animated lightSpeedIn"
      });
    } else {
      this.setState({
        btnClass: "menu-btn",
        showMenu: false,
        overlayClass: "menu-overlay show animated bounceOutUp"
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.state.btnClass} onClick={this.handleClick}>
          <div className="btn-line-wrapper">
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line-close1" />
            <div className="btn-line-close2" />
          </div>
        </div>
        <div className={this.state.overlayClass}>
          <ul>
            <li>Projects</li>
            <li>Contact</li>
            <li>About Me</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuBtn;
