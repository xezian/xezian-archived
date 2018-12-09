import React, { Component } from 'react';
import IntroStyles from './IntroStyles';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'inherit',
      backColor: 'pink',
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
        'inherit'
      ]
    };
    this.interval = null;
  }
  mysteryButton = e => {
    const { colors } = this.state;
    let i = 0;
    this.interval = setInterval(() => {
      this.setState({ color: colors[i], backColor: colors[i - 1] || 'pink' });
      i++;
      if (i >= colors.length) {
        clearInterval(this.interval);
      }
    }, 1000);
  };
  render() {
    return (
      <IntroStyles backColor={this.state.backColor} color={this.state.color}>
        <p>Hello!</p>
        <p>
          Welcome to my page. My name is Jason and I do web development both
          professionally and as a passion.
        </p>
        <p>Feel free to click around and explore.</p>
        <p>
          Go ahead and download my resume:{' '}
          <a href="/files/resume.pdf" download>
            <span role="img" aria-label="scroll">
              📜
            </span>
          </a>
        </p>
        <p>
          Click a button and see what happens:{' '}
          <button onClick={this.mysteryButton}>?</button>
        </p>
        <p>Thanks for swinging by!</p>
      </IntroStyles>
    );
  }
}
