import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavStyles from './NavStyles';
import User from '../Admin/User';
import Signout from '../Admin/Signout';

export default class Nav extends Component {
  render() {
    return (
      <User {...this.props}>
        {({ data: { me } }) => (
          <NavStyles>
            <div className="nav-opts">
              <div className="shim" />
              <Link to="/">
                <h4>Home</h4>
              </Link>
              <h4>/</h4>
              <Link to="/projects">
                <h4>Projects</h4>
              </Link>
              <h4>/</h4>
              <Link to="/contact">
                <h4>Contact</h4>
              </Link>
              {me && (
                <>
                  <Link to="/admin">
                    <h4>Admin</h4>
                  </Link>
                  <Signout />
                </>
              )}
            </div>
          </NavStyles>
        )}
      </User>
    );
  }
}
