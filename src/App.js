import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <container className="container">
        <Header />
        <Main />
        <Footer />
      </container>
      </Router>
    );
  }
}

export default App;
