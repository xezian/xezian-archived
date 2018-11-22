import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default class Body extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={Intro} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </>
    );
  }
}
