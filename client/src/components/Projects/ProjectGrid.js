import React, { Component } from 'react';
import Project from './Project';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { ALL_PROJECTS_QUERY } from './gql';
import Logo from '../Logo/Logo';

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media screen and (max-width: 725px) {
    flex: 100%;
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

export default class ProjectGrid extends Component {
  state = {
    disabled: false
  };
  setDisabled = bool => {
    this.setState({ disabled: bool });
  };
  render() {
    return (
      <>
        <p>
          Please explore some of the web based projects I've worked on over the
          past couple of years. It would be my pleasure to discuss any of these
          with anyone interested.
        </p>
        <Query query={ALL_PROJECTS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <Logo time="5s" flex="column" />;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ProjectsList>
                {data.projects.map(project => {
                  return (
                    <Project
                      setDisabled={this.setDisabled}
                      disabled={this.state.disabled}
                      project={project}
                      key={project.id}
                    />
                  );
                })}
              </ProjectsList>
            );
          }}
        </Query>
      </>
    );
  }
}
