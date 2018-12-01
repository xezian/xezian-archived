import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Project extends Component {
  static propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }).isRequired
  };
  render() {
    const { project } = this.props;
    return (
      <Link to={`/project/${project.id}`}>
        <h4>{project.title}</h4>
      </Link>
    );
  }
}
