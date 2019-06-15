import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="headline">CONTACT</div>
        <div className="underline" />
        <div className="contact">
          Any questions or you want to work together? Send me an Email!
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
        <div className="bottom">
          <div className="copyright">Copyright &copy; 2019</div>
          <div className="privacy foot">Privacy Policy</div>
          <div className="impressum foot">Impressum</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
