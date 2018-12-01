import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { SINGLE_PROJECT_QUERY } from './gql';
import styled from 'styled-components';

const SingleProjectStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

export default class SingleProject extends Component {
  render() {
    return (
      <Query
        query={SINGLE_PROJECT_QUERY}
        variables={{
          id: this.props.match.params.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <div>{error}</div>;
          if (loading) return <p>Loading...</p>;
          if (!data.project) return <p>No project found for {this.props.id}</p>;
          const project = data.project;
          return (
            <SingleProjectStyles>
              <img src={project.image} alt={project.title} />
              <div className="details">
                <h2>viewing {project.title}</h2>
                <p>{project.description}</p>
              </div>
            </SingleProjectStyles>
          );
        }}
      </Query>
    );
  }
}
