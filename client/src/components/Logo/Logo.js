import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo1 from './logo/logo1.svg';
import logo2 from './logo/logo2.svg';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={logo2} className="App-logo2" alt="logo" />
          <img src={logo1} className="App-logo1" alt="logo" />
        </Link>
      </div>
    );
  }
}
