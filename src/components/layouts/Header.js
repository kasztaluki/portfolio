/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// eslint-disable-next-line
import { NavLink, Link } from 'react-router-dom';

import "../../styles/layouts/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// images
import logoTitle from "../../assets/images/logoTitle.PNG";

class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {
        openMenu: false,
        // scroll: false
      };
    }

    // componentDidMount() {
    //   window.addEventListener("scroll", this.handleScroll);
    // }

    // componentWillUnmount() {
    //   window.removeEventListener("scroll", this.handleScroll);
    // }

    handleMenuClick = () => {
      this.setState({ openMenu: !this.openMenu });
      document.documentElement.scrollTop = 0;
    };

    // handleScroll = event => {
    //   if (window.scrollY === 0 && this.state.scroll === true) {
    //     this.setState({ scroll: false });
    //   } else if (window.scrollY !== 0 && this.state.scroll !== true) {
    //     this.setState({ scroll: true });
    //   }
    // };
      
  render() {
    const { openMenu } = this.state;

    const list = [
      { name: "Start", path: "/", exact: true },
      { name: "O mnie", path: "/about" },
      { name: "Projekty", path: "/projects" },
      { name: "Oferta", path: "/skills" },
      { name: "Kontakt", path: "/contact" }
      ];
  
    const navigation = list.map(item => (
    <li className="menu_item" key={item.name}>
        <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        onClick={this.handleMenuClick}
        >
        {item.name}
        </NavLink>
    </li>
    ));

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
            <nav className={`menu${openMenu ? " menu--open" : ""}`}>
              <ul className="navigation_menu">{navigation}</ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
