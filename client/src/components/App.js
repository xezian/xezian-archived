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
        <div>
          <header className="App-header">
            <Logo flex="row" />
            <Nav />
          </header>
          <div className="App-main">
            <Body />
          </div>
          <footer className="App-footer">
            <Logo flex="row-reverse" />
          </footer>
        </div>
      </Router>
    );
  }
}
