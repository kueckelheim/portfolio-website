import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./impressum.scss";
import { Redirect } from "react-router-dom";

import Header from "../header/header.js";

import { Controller, Scene } from "react-scrollmagic";

class Impressum extends Component {
  state = {
    redirectSkills: false,
    redirectProjects: false,
    redirectFooter: false,
    redirectTop: false
  };

  handleClickSkills = event => {
    this.setState({
      redirectSkills: true
    });
  };
  handleClickProjects = event => {
    this.setState({
      redirectProjects: true
    });
  };
  handleClickFooter = event => {
    this.setState({
      redirectFooter: true
    });
  };
  handleClickTop = event => {
    this.setState({
      redirectTop: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirectSkills) {
      return <Redirect to="/#skills" />;
    }
    if (this.state.redirectProjects) {
      return <Redirect to="/#projects" />;
    }
    if (this.state.redirectFooter) {
      return <Redirect to="/#contact" />;
    }
    if (this.state.redirectTop) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div className="impressum">
        <Helmet>
          <title>Impressum</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Controller>
          <Scene pin={true} triggerHook="onLeave">
            <div>
              {this.renderRedirect()}
              <Header
                onClickFooter={() => this.handleClickFooter()}
                onClickProjects={() => this.handleClickProjects()}
                onClickSkills={() => this.handleClickSkills()}
                onClickTop={() => this.handleClickTop()}
              />
            </div>
          </Scene>
        </Controller>
        <div className="container">
          <h4>Impressum</h4>
          <p>
            The following information (Impressum) is required under German law:
          </p>
          <ul>
            <li>Erik Kückelheim</li>
            <ul>
              <li>Kuhmoosweg 3</li>
              <li>78464 Konstanz</li>
              <li>Germany</li>
            </ul>
            <li>E-Mail: erik.kueckelheim@aol.com</li>
            <li>Phone: +49 15 25896-2327</li>
            <li>
              Verantwortlicher im Sinne des Presserechts (V.i.S.d.P.): Erik
              Kückelheim
            </li>
          </ul>
          <p>
            Online Dispute Resolution website of the EU Commission In order for
            consumers and traders to resolve a dispute out-of-court, the
            European Commission developed the Online Dispute Resolution Website:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
              rel="nofollow"
            >
              Online Dispute Resolution Website
            </a>
            .
          </p>
          <h4>Legal Disclaimer</h4>
          <p>
            The contents of these pages were prepared with utmost care.
            Nonetheless, we cannot assume liability for the timeless accuracy
            and completeness of the information. Our website contains links to
            external websites. As the contents of these third-party websites are
            beyond our control, we cannot accept liability for them.
            Responsibility for the contents of the linked pages is always held
            by the provider or operator of the pages.
          </p>
          <div className="source">
            <p>
              Source:
              <a href="https://language-boutique.de/muster-impressum">
                Language-Boutique.de/Muster-Impressum
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Impressum;
