import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNIN_MUTATION } from './gql';
import { CURRENT_USER_QUERY } from './gql';

export default class Signin extends Component {
  state = {
    name: '',
    password: ''
  };
  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => {
          if (error) return <div>{error}</div>;
          return (
            <form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                this.setState({ name: '', password: '' });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign into an account</h2>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Sign In!</button>
              </fieldset>
            </form>
          );
        }}
      </Mutation>
    );
  }
}
