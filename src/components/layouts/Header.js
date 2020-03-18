/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// import { NavLink, Link } from 'react-router-dom';
import "../../styles/layouts/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  // eslint-disable-next-line
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       openMenu: false,
  //       scroll: false
  //     };
  //   }

  //   handleMenuClick = () => {
  //     this.setState({ openMenu: !this.state.openMenu });
  //   };

  //   componentDidMount() {
  //     window.addEventListener("scroll", this.handleScroll);
  //   }

  //   componentWillUnmount() {
  //     window.removeEventListener("scroll", this.handleScroll);
  //   }

  //   handleScroll = event => {
  //     if (window.scrollY === 0 && this.state.scroll === true) {
  //       this.setState({ scroll: false });
  //     } else if (window.scrollY !== 0 && this.state.scroll !== true) {
  //       this.setState({ scroll: true });
  //     }
  //   };

  render() {
    // const { openMenu, scroll } = this.state;

    // const list = [
    // { name: "Start", path: "/", exact: true },
    // { name: "O mnie", path: "/about" },
    // { name: "Umiejętności", path: "/skills" },
    // { name: "Portfolio", path: "/portfolio" },
    // { name: "Kontakt", path: "/contact" }
    // ];

    // const navigation = list.map(item => (
    // <li className="menu_item" key={item.name}>
    //     <NavLink
    //     to={item.path}
    //     exact={item.exact ? item.exact : false}
    //     onClick={this.handleMenuClick}
    //     >
    //     {item.name}
    //     </NavLink>
    // </li>
    // ));

    return (
      <header className="header">
        <div className="navigation">
          <div className="title">
            <span className="title_name">
              ...WebDev
              <br /> =&gt; Challange
            </span>
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
          <nav className="navigation_menu">
            <div>Start</div>
            <div>O mnie</div>
            <div>Umiejętności</div>
            <div>Projekty</div>
            <div>Kontakt</div>
            {/* <ul>navigation</ul> */}
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;