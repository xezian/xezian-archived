import React, { Component } from 'react';
import styled from 'styled-components';

const UnStyledButton = styled.button`
  padding-left: 1vw;
  position: absolute;
  bottom: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export default class DarkLightButton extends Component {
  state = {
    themoji: '🌞'
  };
  themeSwitch = () => {
    switch (this.props.themeName) {
      case 'dark':
        this.setState({ themoji: '🌚' });
        this.props.switchTheme('light');
        break;
      case 'light':
        this.setState({ themoji: '🌞' });
        this.props.switchTheme('dark');
        break;
      default:
    }
  };
  render() {
    return (
      <UnStyledButton onClick={this.themeSwitch}>
        {this.state.themoji}
      </UnStyledButton>
    );
  }
}
