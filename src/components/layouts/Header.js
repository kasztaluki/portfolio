import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
          openMenu: false,
          scroll: false
        };
      }
    
      handleMenuClick = () => {
        this.setState({ openMenu: !this.state.openMenu });
      };
    
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = event => {
        if (window.scrollY === 0 && this.state.scroll === true) {
          this.setState({ scroll: false });
        } else if (window.scrollY !== 0 && this.state.scroll !== true) {
          this.setState({ scroll: true });
        }
      };

    render () {
        const { openMenu, scroll } = this.state;

        const list = [
        { name: "Start", path: "/", exact: true },
        { name: "O mnie", path: "/about" },
        { name: "Umiejętności", path: "/skills" },
        { name: "Portfolio", path: "/portfolio" },
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
            <header>
                <div>
                    <span>...WebDevChallange</span>
                </div>
                <div>
                    <div>
                        <a
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/kasztaluki">Github</a>
                    </div>
                    <div>
                        <a
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/in/lukaszgrabowskipg">Linkedin</a>
                    </div>
                    <div>
                        <a
                        aria-label="E-mail" href="mailto:lukasz.grabowski.pg@gmail.com"
                        >Email</a>
                    </div>
                </div>
                <nav>
                    <div>Start</div>
                    <div>O mnie</div>
                    <div>Umiejętności</div>
                    <div>Projekty</div>
                    <div>Kontakt</div>
                    {/* <ul>{navigation}</ul> */}
                </nav>
            </header>
        );
    }
}

export default Header;