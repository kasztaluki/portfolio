import React, { Component } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import './App.css';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Footer from './components/layouts/Footer';

class App extends Component {
  render() {
    return (
      <container>
        <Header />
        <Main />
        <Footer />
      </container>
    );
  }
}

export default App;
