/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "../../styles/layouts/Footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="copyright">
          <p>
            <span>Copyright &copy; WebDevChallenge 2020.</span>
            <br />
            <span>designed by Łukasz Grabowski</span>
          </p>
        </div>
        <div className="footer_social">
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
          <a aria-label="E-mail" href="mailto:lukasz.grabowski.pg@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
