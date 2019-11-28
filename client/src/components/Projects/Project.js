import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from '../Admin/User';
import PlusMinus from '../Buttons/PlusMinus';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumb = styled.img`
  height: 150px;
  width: auto;
`;
const Box = styled.div`
  height: 230px;
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
      <User {...this.props}>
        {({ data: { me } }) => (
          <Box>
            <Link to={`/projects/${project.id}`}>
              <Thumb src={project.img} alt={project.title} />
              <h4>{project.title}</h4>
            </Link>
            {me && (
              <PlusMinus
                setDisabled={this.props.setDisabled}
                disabled={this.props.disabled}
                project={project}
              />
            )}
          </Box>
        )}
      </User>
    );
  }
}
