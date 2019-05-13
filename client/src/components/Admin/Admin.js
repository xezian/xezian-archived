import React, { Component } from 'react';
import NewProjectForm from './NewProjectForm';
import GuestList from './GuestList';
import PleaseSignIn from './PleaseSignIn';

export default class Admin extends Component {
  state = {
    choice: 'newproject'
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({ choice: e.target.name });
  };
  render() {
    return (
      <PleaseSignIn>
        {this.state.choice === 'guestlist' && (
          <>
            <button name="newproject" onClick={this.handleClick}>
              New Project
            </button>
            <GuestList />
          </>
        )}
        {this.state.choice === 'newproject' && (
          <>
            <button name="guestlist" onClick={this.handleClick}>
              Guest List
            </button>
            <NewProjectForm />
          </>
        )}
      </PleaseSignIn>
    );
  }
}
