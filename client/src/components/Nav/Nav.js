import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-opts">
        <Link className="nav-item" to="/">
          <h4>Home</h4>
        </Link>
        <Link className="nav-item" to="/projects">
          <h4>Projects</h4>
        </Link>
        <Link className="nav-item" to="/contact">
          <h4>Contact</h4>
        </Link>
      </div>
    );
  }
}
