import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectGrid from './ProjectGrid';
import SingleProject from './SingleProject';
import OuterBorder from '../Page/OuterBorder';

const Center = styled.div`
  text-align: center;
  max-width: 100%;
  min-height: 100%;
  p {
    width: 80vw;
    text-align: left;
  }
`;

export default class Projects extends Component {
  render() {
    return (
      <Center>
        <OuterBorder>
          {this.props.projectId ? (
            <SingleProject projectId={this.props.projectId} />
          ) : (
            <ProjectGrid />
          )}
        </OuterBorder>
      </Center>
    );
  }
}
