import React from 'react';
import { Route } from 'react-router-dom';
import ThainQ from '../ThainQ/ThainQ';
import BodyStyles from './BodyStyles';
import MainChannel from './MainChannel';
import User from '../Admin/User';
import Admin from '../Admin/Admin';
import Signin from '../Admin/Signin';

const Body = props => {
  const bodyProps = props;
  return (
    <User {...props}>
      {({ data: { me } }) => {
        return (
          <BodyStyles>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              render={props => {
                return (
                  <MainChannel
                    navRefs={bodyProps.navRefs}
                    theme={bodyProps.theme}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path={process.env.PUBLIC_URL + '/projects'}
              exact
              render={props => {
                return (
                  <MainChannel
                    navRefs={bodyProps.navRefs}
                    theme={bodyProps.theme}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path={process.env.PUBLIC_URL + '/contact'}
              exact
              render={props => {
                return (
                  <MainChannel
                    navRefs={bodyProps.navRefs}
                    theme={bodyProps.theme}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path={process.env.PUBLIC_URL + '/projects/:id'}
              exact
              render={props => {
                return (
                  <MainChannel
                    navRefs={bodyProps.navRefs}
                    theme={bodyProps.theme}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path={process.env.PUBLIC_URL + '/thainq'}
              exact
              component={ThainQ}
            />
            {me && (
              <Route
                path={process.env.PUBLIC_URL + '/admin'}
                exact
                component={Admin}
              />
            )}
            {!me && (
              <Route
                path={process.env.PUBLIC_URL + '/admin'}
                exact
                component={Signin}
              />
            )}
          </BodyStyles>
        );
      }}
    </User>
  );
};

export default Body;
