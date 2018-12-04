import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Project from './Project';
import { ALL_PROJECTS_QUERY } from './gql';

const Center = styled.div`
  text-align: center;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default class Projcts extends Component {
  render() {
    return (
      <Center>
        <p>My Projects!</p>
        <Query query={ALL_PROJECTS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ProjectsList>
                {data.projects.map(project => {
                  return <Project project={project} key={project.id} />;
                })}
              </ProjectsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}
