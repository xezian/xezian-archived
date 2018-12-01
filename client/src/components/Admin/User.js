import { Query } from 'react-apollo';
import React from 'react';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './gql';

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => {
      console.log(payload);
      return props.children(payload);
    }}
  </Query>
);

User.PropTypes = {
  children: PropTypes.func.isRequired
};

export default User;
