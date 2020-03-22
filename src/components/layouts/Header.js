/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "../../styles/layouts/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// images
import logoTitle from "../../images/logoTitle.PNG";

class Header extends Component {

  render() {

    return (
      <header className="header">
        <div className="navigation">
          <div className="title">
            <a href="localhost:3000"><img
            src={logoTitle}
            alt="title_logo"
            className="title_logo"
            /></a>
            <div className="title_social">
              <a
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kasztaluki"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/lukaszgrabowskipg"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                aria-label="E-mail"
                href="mailto:lukasz.grabowski.pg@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
