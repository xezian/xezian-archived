import React, { Component } from 'react';
import './Contact.css';

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
    return (
      <div className="outerland">
        <form method="post">
          <fieldset className="innerland">
            <h2>Contact Me!</h2>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="your email addy"
                value={this.state.email}
                onChange={this.saveToState}
              />
            </label>
            <label htmlFor="subject">
              <input
                type="input"
                name="subject"
                autoComplete="off"
                placeholder="optional subject field"
                value={this.state.subject}
                onChange={this.saveToState}
              />
            </label>
            <label htmlFor="body">
              <textarea
                data-gramm_editor="false"
                type="text/html"
                name="body"
                placeholder="your message to me..."
                value={this.state.embodyail}
                onChange={this.saveToState}
              />
            </label>
            <button type="submit">
              <span role="img" aria-label="email-icon">
                📧
              </span>
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
