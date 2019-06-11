import React, { Component } from "react";
import "./what.scss";

class What extends Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="headline">WHAT I DO</div>
        <div className="underline" />

        <div className="infoWrapper">
          <div className="infoBox">
            <div className="iconBox">
              <img
                src={process.env.PUBLIC_URL + "/image/create.png"}
                alt="Erik Kueckelheim web developer"
              />
            </div>
            <h2>Create</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae! Illo cum necessitatibus totam quibusdam fuga
              consectetur nisi, soluta corporis est, laudantium voluptatum nihil
              et repellat? Iure sequi
            </p>
          </div>
          <div className="infoBox">
            <div className="iconBox">
              <img
                src={process.env.PUBLIC_URL + "/image/upgrade.png"}
                alt="Erik Kueckelheim web developer"
              />
            </div>
            <h2>Upgrade</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae! Illo cum necessitatibus totam quibusdam fuga
              consectetur nisi, soluta corporis est, laudantium voluptatum nihil
              et repellat? Iure sequi amet ratione
            </p>
          </div>
          <div className="infoBox">
            <div className="iconBox">
              <img
                src={process.env.PUBLIC_URL + "/image/update.png"}
                alt="Erik Kueckelheim web developer"
              />
            </div>
            <h2>Update</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae! Illo cum necessitatibus totam quibusdam fuga
              consectetur nisi,
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default What;
