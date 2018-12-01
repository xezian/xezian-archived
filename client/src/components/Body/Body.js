import React from 'react';
import { Route } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import SingleProject from '../Projects/SingleProject';
import Contact from '../Contact/Contact';
import ThainQ from '../ThainQ/ThainQ';
import BodyStyles from './BodyStyles';
import User from '../Admin/User';
import Admin from '../Admin/Admin';
import Signin from '../Admin/Signin';

const Body = props => (
  <User {...props}>
    {({ data: { me } }) => (
      <BodyStyles>
        <Route path="/" exact component={Intro} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/:id" component={SingleProject} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/thainq" exact component={ThainQ} />
        {me && <Route path="/admin" exact component={Admin} />}
        {!me && <Route path="/admin" exact component={Signin} />}
      </BodyStyles>
    )}
  </User>
);

export default Body;
