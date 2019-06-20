import React, { Component } from "react";
import "./header.scss";

import MediaQuery from "react-responsive";
import MenuBtn from "./menuBtn.js";

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <div className="logoWrapper">
            <div className="logo" onClick={() => this.props.onClickTop()}>
              Erik Kückelheim
            </div>
          </div>
          <nav>
            <MediaQuery query="(min-width: 700px)">
              <div
                className="link"
                onClick={() => this.props.onClickProjects()}
              >
                Projects
              </div>
              <div className="link" onClick={() => this.props.onClickSkills()}>
                Skills
              </div>
              <div className="link" onClick={() => this.props.onClickFooter()}>
                Contact
              </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 700px)">
              <MenuBtn
                onClickFooter={() => this.props.onClickFooter()}
                onClickProjects={() => this.props.onClickProjects()}
                onClickSkills={() => this.props.onClickSkills()}
              />
            </MediaQuery>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
