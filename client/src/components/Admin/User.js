import { Query } from 'react-apollo';
import React from 'react';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './gql';

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => {
      if (payload.loading)
        return (
          <div
            style={{
              width: '100vw',
              height: '100vh',
              backgroundColor: props.theme.mainBackground
            }}
          />
        );
      return props.children(payload);
    }}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
