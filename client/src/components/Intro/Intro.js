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
        <h3>Hello!</h3>
        <p>
          Welcome to my page. My name is Jason Leo and I do web development both
          professionally and as a passion.
        </p>
        <p>Feel free to click around and explore!</p>
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
        <p>
          Visit the old (static html, css, js) version of my portfolio{' '}
          <a
            href="https://xezian.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p class="techList">
          Enjoy this list of Web Development technologies I've become proficient
          using!
          <ul>
            <li>
              Languages
              <ul>
                <li>JavaScript</li>
                <li>Adobe ColdFusion</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>Transact SQL</li>
              </ul>
            </li>
            <li>
              Frameworks
              <ul>
                <li>Node.js</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>Angular</li>
                <li>Express.js</li>
                <li>jQuery</li>
                <li>Sass</li>
              </ul>
            </li>
            <li>
              Database
              <ul>
                <li>MS SQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
              </ul>
            </li>
            <li>
              Other
              <ul>
                <li>Command Line</li>
                <li>Git</li>
                <li>SVN</li>
              </ul>
            </li>
          </ul>
        </p>
        <p>Thanks for swinging by!</p>
      </IntroStyles>
    );
  }
}
