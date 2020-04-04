/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

import "../../styles/layouts/Main.scss";

import StartPage from "../pages/StartPage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const location = this.props;

    return (
      <TransitionGroup component="main" className="main">
      <div className="wrapper">
        <Switch location={location}>
              <Route path="/" exact component={StartPage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/skills" exact component={SkillsPage} />
              <Route path="/projects" exact component={ProjectsPage} />
              <Route path="/contact" exact component={ContactPage} />
              <Route component={NotFoundPage} />
            </Switch>
      </div>
      </TransitionGroup>
    );
  }
}

export default withRouter(Main);
