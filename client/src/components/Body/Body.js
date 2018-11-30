import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ThainQ from '../ThainQ/ThainQ';
import BodyStyles from './BodyStyles';

export default class Body extends Component {
  render() {
    return (
      <BodyStyles>
        <Route path="/" exact component={Intro} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/thainq" exact component={ThainQ} />
      </BodyStyles>
    );
  }
}
