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
            <div className="logo">Erik Kückelheim</div>
          </div>
          <nav>
            <MediaQuery query="(min-width: 700px)">
              <div className="link">Projects</div>
              <div className="link">Skills</div>
              <div className="link">Contact</div>
            </MediaQuery>
            <MediaQuery query="(max-width: 700px)">
              <MenuBtn />
            </MediaQuery>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
