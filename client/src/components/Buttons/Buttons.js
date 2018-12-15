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
    themoji: '/icons/sunface.png'
  };
  themeSwitch = () => {
    switch (this.props.themeName) {
      case 'dark':
        this.setState({ themoji: '/icons/moonface.png' });
        this.props.switchTheme('light');
        break;
      case 'light':
        this.setState({ themoji: '/icons/sunface.png' });
        this.props.switchTheme('dark');
        break;
      default:
    }
  };
  render() {
    return (
      <UnStyledButton onClick={this.themeSwitch}>
        <img src={this.state.themoji} alt={this.state.themoji} />
      </UnStyledButton>
    );
  }
}
