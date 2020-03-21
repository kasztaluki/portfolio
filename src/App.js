import React, { Component } from "react";
import "./styles/app.scss";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <container className="container">
        <Header />
        <Main />
        <Footer />
      </container>
    );
  }
}

export default App;
