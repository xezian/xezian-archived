import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavStyles from './NavStyles';
import User from '../Admin/User';
import Signout from '../Admin/Signout';

const Nav = props => {
  const home = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const refs = {
    home,
    projects,
    contact
  };
  useEffect(() => {
    props.updateRefs(refs);
  }, []);
  return (
    <User {...props}>
      {({ data: { me } }) => (
        <NavStyles>
          <div className="nav-opts">
            <div className="shim" />
            <Link to="/">
              <h4 ref={home}>Home</h4>
            </Link>
            <h4>/</h4>
            <Link to="/projects">
              <h4 ref={projects}>Projects</h4>
            </Link>
            <h4>/</h4>
            <Link to="/contact">
              <h4 ref={contact}>Contact</h4>
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
};

export default Nav;
