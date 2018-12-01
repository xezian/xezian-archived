import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PageStyles from './PageStyles';
import Logo from '../Logo/Logo';
import Buttons from '../Buttons/Buttons';
import Nav from '../Nav/Nav';
import Body from '../Body/Body';

const lightTheme = {
  headerFooter: '#DABAEA',
  mainBackground: '#a9e9e9',
  innerBackground: '#4567ef',
  formField: '#E1E1E1',
  textOne: '#1e305c',
  textTwo: '#02001c',
  textThree: '000555'
};

const darkTheme = {
  headerFooter: '#1e305c',
  mainBackground: '#02001c',
  innerBackground: '#000555',
  formField: '#22405c',
  textOne: '#DABAEA',
  textTwo: '#4567ef',
  textThree: '#e2e2e2'
};

const GlobalStyle = createGlobalStyle`
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
        font-family: Arial, Helvetica, sans-serif;
    }
    a {
        text-decoration: none;
        color: #393939;
    }
`;

class Page extends Component {
  state = {
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
    const { theme, themeName } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <PageStyles>
          <GlobalStyle />
          <header className="App-header">
            <Logo flex="row" />
            <Nav theme={theme} {...this.props} />
          </header>
          <div className="App-main">
            <Body theme={theme} {...this.props} />
          </div>
          <footer className="App-footer">
            <Buttons themeName={themeName} switchTheme={this.switchTheme} />
            <Logo flex="row-reverse" />
          </footer>
        </PageStyles>
      </ThemeProvider>
    );
  }
}

export default Page;
