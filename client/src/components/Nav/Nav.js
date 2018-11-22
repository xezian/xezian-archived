import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-opts">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/projects">
          <h4>Projects</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
      </div>
    );
  }
}
