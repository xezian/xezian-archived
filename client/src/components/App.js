import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Body from './Body/Body';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Logo />
            <Nav />
          </header>
          <div className="App-main">
            <Body />
          </div>
          <footer className="App-footer">
            <Logo />
          </footer>
        </div>
      </Router>
    );
  }
}
