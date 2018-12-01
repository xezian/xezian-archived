import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNOUT_MUTATION } from './gql';
import { CURRENT_USER_QUERY } from './gql';

const Signout = props => (
  <Mutation
    mutation={SIGNOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => {
      return <button onClick={signout}>Sign Out</button>;
    }}
  </Mutation>
);

export default Signout;
