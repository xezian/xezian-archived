import React, { Component } from 'react';
import moment from 'moment';
import IntroStyles from './IntroStyles';
import selfie from '../../images/selfie.jpg';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      start: '',
      color: 'inherit',
      backColor: 'pink',
      buttStyle: {},
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
        'inherit'
      ],
      format: 'LL',
      formats: [
        'lll',
        'MMMM Do YYYY, h:mm:ss a',
        'MMM Do YY',
        'l',
        'L',
        '[The] DDDo [day of] YYYY',
        '[The] Wo [week of] Y'
      ]
    };
    this.interval = null;
  }
  componentDidMount() {
    const start = moment(this.props.start).format(this.state.format);
    this.setState({ start });
  }

  setFormat = e => {
    e.preventDefault();
    const formats = this.state.formats;
    const newFormat = formats.splice(0, 1);
    formats.push(this.state.format);
    const start = moment(this.props.start).format(newFormat[0]);
    this.setState({ formats, start, format: newFormat[0] });
  };

  mysteryButton = e => {
    const { i, colors } = this.state;
    const buttStyle = {
      position: `absolute`,
      top: `${Math.floor(Math.random() * 100)}vh`,
      left: `${Math.floor(Math.random() * 100)}vw`
    };

    this.setState({
      buttStyle,
      color: colors[i],
      backColor:
        colors[i + 1] || (i === colors.length - 1 ? 'pink' : colors[0]),
      i: i + 1
    });

    if (i >= colors.length) {
      this.setState({ i: 0 });
    }
  };
  render() {
    const { start, color, backColor, buttStyle } = this.state;
    return (
      <IntroStyles backColor={backColor} color={color}>
        <div className="outerBorder">
          <img src={selfie} id="selfie" alt="selfie" aria-label="selfie" />
        </div>
        <h1>Hello!</h1>
        <p>
          You found the web devlopment portfolio demonstration web project of
          Jason Leo. It's on the internet! How exciting. I have been teaching
          myself to build modern web applications since at least{' '}
          <span
            id="clock"
            onClick={this.setFormat}
            aria-label="clock"
            role="img"
          >
            🕒
          </span>
          {` ${start}`}.
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
          <button style={buttStyle} onClick={this.mysteryButton}>
            ?
          </button>
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
        <div className="techList">
          Enjoy this list of Web Development technologies I've become proficient
          using!
          <ul>
            <li>
              <details>
                <summary>Languages</summary>
                <ul>
                  <li>JavaScript</li>
                  <li>Adobe ColdFusion</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>Transact SQL</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Frameworks</summary>
                <ul>
                  <li>Node.js</li>
                  <li>ReactJS</li>
                  <li>Bootstrap</li>
                  <li>Angular</li>
                  <li>Express.js</li>
                  <li>jQuery</li>
                  <li>Sass</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Database</summary>
                <ul>
                  <li>MS SQL</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Other</summary>
                <ul>
                  <li>Command Line</li>
                  <li>Git</li>
                  <li>SVN</li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <p>Thanks for swinging by!</p>
      </IntroStyles>
    );
  }
}
