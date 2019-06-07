import React, { Component } from "react";
import "./top.scss";

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

class Top extends Component {
  render() {
    return (
      <Controller>
        <Scene triggerElement="#trigger" duration="100%" triggerHook="onEnter">
          {progress => (
            <Tween
              to={{
                opacity: "0"
              }}
              totalProgress={progress}
              paused
            >
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
                        <div className="btn">
                          <div className="center">
                            <div className="wrapper">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/image/mail-icon.png"
                                }
                                alt="Mail Icon"
                              />
                              <div>CONTACT ME</div>
                            </div>
                          </div>
                        </div>
                        <div className="btn">PROJECTS</div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tween>
          )}
        </Scene>
        <div id="trigger" />
      </Controller>
    );
  }
}

export default Top;
