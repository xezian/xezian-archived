import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PageStyles from './PageStyles';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Body from '../Body/Body';

const lightTheme = {
  headerFooter: '#1e305c',
  mainBackground: '#1e3939',
  innerBackground: '#3A3A3A',
  formField: '#E1E1E1',
  textOne: '#DABAEA',
  textTwo: '#AFEEFA',
  textThree: '1000px',
};

const darkTheme = {
  headerFooter: '#1e305c',
  mainBackground: '#02001c',
  innerBackground: '#000555',
  formField: '#22405c',
  textOne: '#DABAEA',
  textTwo: '#4567ef',
  textThree: '#e2e2e2',
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

export default class Page extends Component {
  state = {
    theme: darkTheme
  };
  switchTheme = (theme) => {
    switch (theme) {
      case 'dark':
        this.setState({theme:darkTheme});
        break;
      case 'light':
        this.setState({theme:lightTheme});
        break;
      default:
       return null;        
    };
  };
  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}> 
        <Router>
          <PageStyles>
          <GlobalStyle />
            <header className="App-header">
              <Logo flex="row" />
              <Nav 
                switchTheme={this.switchTheme}
              />
            </header>
            <div className="App-main">
              <Body />
            </div>
            <footer className="App-footer">
              <Logo flex="row-reverse" />
            </footer>
          </PageStyles>
        </Router>
      </ThemeProvider>
    );
  }
}
