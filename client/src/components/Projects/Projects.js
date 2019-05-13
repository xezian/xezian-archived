import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Project from './Project';
import Logo from '../Logo/Logo';
import { ALL_PROJECTS_QUERY } from './gql';

const Center = styled.div`
  text-align: center;
  padding-left: 5vw;
  padding-right: 5vw;
  p {
    width: 80vw;
    text-align: left;
  }
`;

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

export default class Projects extends Component {
  state = {
    disabled: false
  };
  setDisabled = bool => {
    this.setState({ disabled: bool });
  };
  render() {
    return (
      <Center>
        <p>
          Please explore some of the web based projects I've worked on over the
          past couple of years. It would be my pleasure to discuss any of these
          with anyone interested. Check out my <a href="/contact">contact </a>
          page.
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
      </Center>
    );
  }
}
