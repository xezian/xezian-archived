import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ContactStyles from './ContactStyles';

const EMAIL_MUTATION = gql`
  mutation EMAIL_MUTATION($email: String!, $subject: String, $body: String!) {
    emailMe(email: $email, subject: $subject, body: $body) {
      message
    }
  }
`;

export default class Contact extends Component {
  state = {
    email: '',
    subject: '',
    body: ''
  };
  saveToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, subject, body } = this.state;
    const isEnabled = email.length > 0 && body.length > 0;
    return (
      <ContactStyles>
        <Mutation mutation={EMAIL_MUTATION} variables={this.state}>
          {(emailMe, { error, loading }) => {
            return (
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  await emailMe();
                  this.props.history.push('/thainq');
                }}
              >
                <fieldset className="innerland">
                  <h2>Contact Me!</h2>
                  <label htmlFor="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="your email addy"
                      value={email}
                      onChange={this.saveToState}
                    />
                  </label>
                  <label htmlFor="subject">
                    <input
                      type="input"
                      name="subject"
                      autoComplete="off"
                      placeholder="optional subject field"
                      value={subject}
                      onChange={this.saveToState}
                    />
                  </label>
                  <label htmlFor="body">
                    <textarea
                      data-gramm_editor="false"
                      type="text/html"
                      name="body"
                      placeholder="your message to me..."
                      value={body}
                      onChange={this.saveToState}
                    />
                  </label>
                  <button disabled={!isEnabled} type="submit">
                    <span role="img" aria-label="email-icon">
                      📧
                    </span>
                  </button>
                </fieldset>
              </form>
            );
          }}
        </Mutation>
      </ContactStyles>
    );
  }
}
