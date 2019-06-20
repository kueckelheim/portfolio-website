import React, { Component } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="grid">
          <div className="picture">
            <img
              className="portrait"
              src={process.env.PUBLIC_URL + "/image/Erik Kueckelheim.jpg"}
              alt="Erik Kückelheim Web Developer"
            />
          </div>
          <div className="contact">
            <div className="headline">CONTACT</div>
            <div className="underline" />
            Do you have any questions or want to work together? Send me an
            Email!
            <p>
              <a href="mailto:erik.kueckelheim@aol.com">
                <img
                  src={process.env.PUBLIC_URL + "/image/mail-icon.png"}
                  alt="Mail Icon"
                />
              </a>
            </p>
            <p>
              <a href="mailto:erik.kueckelheim@aol.com">
                erik.kueckelheim@aol.com
              </a>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="copyright">Copyright &copy; 2019</div>
          <Link to="/privacy">
            <div className="privacy foot">Privacy Policy</div>
          </Link>
          <Link to="/impressum">
            <div className="impressum foot">Impressum</div>
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
