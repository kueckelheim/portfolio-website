import React, { Component } from "react";
import "./aboutMe.scss";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe">
        <p className="headline">
          <span>About Me</span>
        </p>
        <div className="wrapper">
          <div className="container">
            <div className="image">
              <img
                src={process.env.PUBLIC_URL + "/image/Erik Kueckelheim.jpg"}
                alt="Erik Kueckelheim web developer"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              quis inventore ducimus, pariatur ut est quaerat fuga voluptatum
              commodi id natus labore quasi veniam. Commodi accusantium sed nam
              odit, quibusdam debitis praesentium pariatur aperiam, possimus,
              sunt neque molestiae asperiores! Exercitationem, aliquid nobis
              inventore aliquam nisi rerum! Perferendis nisi odio unde?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
