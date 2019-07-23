import React, { Component } from "react";
import "./top.scss";

class Top extends Component {
  render() {
    return (
      <div className="top">
        <div className="profileWrapper">
          <div className="container">
            <div className="hello">HELLO</div>
            <div className="name">I'M ERIK</div>
            <div className="description">
              I Develop Modern Web Applications.
            </div>
            <div className="btnWrapperWrapper">
              <div className="btnWrapper">
                <div className="btn" onClick={() => this.props.onClickFooter()}>
                  <div className="center">
                    <div className="wrapper">
                      <img
                        src={process.env.PUBLIC_URL + "/image/mail-icon.png"}
                        alt="Mail Icon"
                      />
                      <div>CONTACT ME</div>
                    </div>
                  </div>
                </div>
                <div
                  className="btn"
                  onClick={() => this.props.onClickProjects()}
                >
                  PROJECTS
                </div>
                <a
                  href="https://github.com/kueckelheim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn">
                    <div className="center">
                      <div className="wrapper">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/image/GitHub-Mark-Light-32px.png"
                          }
                          alt="GitHub Icon"
                        />
                        <div>GitHub</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
