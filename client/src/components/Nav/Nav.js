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
              <Link className="nav-item" to="/">
                <h4>Home</h4>
              </Link>
              <Link className="nav-item" to="/projects">
                <h4>Projects</h4>
              </Link>
              <Link className="nav-item" to="/contact">
                <h4>Contact</h4>
              </Link>
              {me && (
                <>
                  <Link className="nav-item" to="/admin">
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
