import React, { Component } from "react";
import "./what.scss";
import "../../../config/animate.min.css";

import { Controller, Scene } from "react-scrollmagic";

class What extends Component {
  render() {
    return (
      <div className="aboutMe">
        <div id="triggerWhat" />
        <Controller>
          <Scene
            classToggle="animated"
            triggerElement="#triggerWhat"
            // reverse={false}
            triggerHook="onEnter"
          >
            {() => <div className="headline">WHAT I DO</div>}
          </Scene>
          <Scene
            classToggle="animated"
            triggerElement="#triggerWhat"
            // reverse={false}
            triggerHook="onCenter"
          >
            {() => <div className="underline" />}
          </Scene>
        </Controller>

        <div className="infoWrapper">
          <Controller>
            <Scene
              classToggle="animated1"
              triggerElement="#triggerWhat"
              // reverse={false}
              triggerHook="onCenter"
            >
              {() => (
                <div className="infoBox">
                  <div className="iconBox">
                    <img
                      src={process.env.PUBLIC_URL + "/image/create.png"}
                      alt="Erik Kueckelheim web developer"
                    />
                  </div>
                  <h2>Develop</h2>
                  <p>
                    I develop complex user interfaces as well as static websites
                    based on modern web standards.
                  </p>
                </div>
              )}
            </Scene>
            <Scene
              classToggle="animated2"
              triggerElement="#triggerWhat"
              // reverse={false}
              triggerHook="onCenter"
            >
              {() => (
                <div className="infoBox">
                  <div className="iconBox">
                    <img
                      src={process.env.PUBLIC_URL + "/image/upgrade.png"}
                      alt="Erik Kueckelheim web developer"
                    />
                  </div>
                  <h2>Upgrade</h2>
                  <p>
                    I can help you bringing your existing digital products to
                    the next level using state of the art tools and technologies
                    in order to give your users the best possible experience.
                  </p>
                </div>
              )}
            </Scene>
            <Scene
              classToggle="animated3"
              triggerElement="#triggerWhat"
              // reverse={false}
              triggerHook="onCenter"
            >
              {() => (
                <div className="infoBox">
                  <div className="iconBox">
                    <img
                      src={process.env.PUBLIC_URL + "/image/update.png"}
                      alt="Erik Kueckelheim web developer"
                    />
                  </div>
                  <h2>Update</h2>
                  <p>
                    Your online appeareance needs to be taken care of on a
                    regular basis in order to keep up with technological
                    changes, and your own updated content. This is part of my
                    service.
                  </p>
                </div>
              )}
            </Scene>
          </Controller>
        </div>
      </div>
    );
  }
}

export default What;
