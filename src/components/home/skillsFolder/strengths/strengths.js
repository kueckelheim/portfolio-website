import React, { Component } from "react";
import "./strengths.scss";

class Strengths extends Component {
  state = {};
  render() {
    return (
      <div className="strengths">
        <div className="strength">
          <div className="hexagon">
            <div className="hexagon1" />
            <div className="hexagon2">
              <img
                src={process.env.PUBLIC_URL + "/image/create.png"}
                alt="Erik Kueckelheim web developer"
              />
            </div>
            <div className="hexagon3" />
          </div>
          <div className="descriptionWrapper">
            <div className="description">
              <h2>Responsive Design</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              assumenda dolorum quasi, eaque incidunt soluta.
            </div>
          </div>
        </div>
        <div className="strength">
          <div className="hexagon">
            <div className="hexagon1" />
            <div className="hexagon2">
              <img
                src={process.env.PUBLIC_URL + "/image/create.png"}
                alt="Erik Kueckelheim web developer"
              />
            </div>
            <div className="hexagon3" />
          </div>
          <div className="descriptionWrapper">
            <div className="description">
              <h2>Responsive Design</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              assumenda dolorum quasi, eaque incidunt soluta.
            </div>
          </div>
        </div>
        <div className="strength">
          <div className="hexagon">
            <div className="hexagon1" />
            <div className="hexagon2">
              <img
                src={process.env.PUBLIC_URL + "/image/create.png"}
                alt="Erik Kueckelheim web developer"
              />
            </div>
            <div className="hexagon3" />
          </div>
          <div className="descriptionWrapper">
            <div className="description">
              <h2>Responsive Design</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              assumenda dolorum quasi, eaque incidunt soluta.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Strengths;
