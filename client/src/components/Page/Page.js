import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PageStyles from './PageStyles';
import Logo from '../Logo/Logo';
import DarkLightButton from '../Buttons/Buttons';
import ProfileLinks from '../Buttons/ProfileLinks';
import Nav from '../Nav/Nav';
import Body from '../Body/Body';

const timeOf = new Date(2017, 7, 7);

const lightTheme = {
  headerFooter: '#c4b9c9',
  mainBackground: '#d7e2e2',
  innerBackground: '#265ca0',
  formField: '#e2e2e2',
  textOne: '#1d2538',
  textTwo: '#0a0916',
  textThree: '#1a1d4f',
  linkText: '#22405c'
};

const darkTheme = {
  headerFooter: '#1d2538',
  mainBackground: '#0a0916',
  innerBackground: '#1a1d4f',
  formField: '#22405c',
  textOne: '#c4b9c9',
  textTwo: '#265ca0',
  textThree: '#e2e2e2',
  linkText: '#d7e2e2'
};

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Cinzel|Lobster|Raleway');
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: Raleway, sans-serif;
    }
    h1, h2 {
      font-family: Lobster, serif;
    }
    h3, h4 {
      font-family: Cinzel, serif;
    }
    a {
        text-decoration: none;
    }
`;

class Page extends Component {
  state = {
    start: timeOf,
    theme: darkTheme,
    themeName: 'dark'
  };
  switchTheme = theme => {
    switch (theme) {
      case 'dark':
        this.setState({ theme: darkTheme, themeName: 'dark' });
        break;
      case 'light':
        this.setState({ theme: lightTheme, themeName: 'light' });
        break;
      default:
        return null;
    }
  };
  render() {
    const { start, theme, themeName } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <PageStyles>
          <GlobalStyle />
          <header className="App-header">
            <DarkLightButton
              themeName={themeName}
              switchTheme={this.switchTheme}
            />
            <Nav theme={theme} {...this.props} />
          </header>
          <div className="App-main">
            <Body theme={theme} start={start} {...this.props} />
          </div>
          <footer className="App-footer">
            <ProfileLinks />
            <Logo time="111s" flex="row-reverse" />
          </footer>
        </PageStyles>
      </ThemeProvider>
    );
  }
}

export default Page;
