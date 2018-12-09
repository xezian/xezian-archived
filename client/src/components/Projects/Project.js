import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumb = styled.img`
  height: 150px;
  width: auto;
`;

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
      <div>
        <Link to={`/project/${project.id}`}>
          <Thumb src={project.img} alt={project.title} />
          <h4>{project.title}</h4>
        </Link>
      </div>
    );
  }
}
