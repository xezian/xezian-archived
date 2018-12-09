import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { SINGLE_PROJECT_QUERY } from './gql';
import styled from 'styled-components';

const SingleProjectStyles = styled.div`
  width: 100vw;
  h2 {
    text-align: center;
  }
  .images {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
    width: 100vw;
    overflow: auto;
    img {
      width: 100%;
      height: 100%;
      margin-top: 20vw;
      object-fit: contain;
    }
  }
  .details {
    padding: 0 10vw 0 10vw;
    width: 80vw;
    font-size: 2rem;
  }
  .links {
    display: flex;
    justify-content: space-around;
    .link {
      width: 20vw;
    }
    .repo {
      width: 20vw;
    }
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
          console.log(project);
          return (
            <SingleProjectStyles>
              <div className="images">
                <img src={project.image} alt={project.title} />
                <img src={project.image2} alt={project.title} />
                <img src={project.image3} alt={project.title} />
              </div>
              <div className="details">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="links">
                <a
                  className="link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed
                </a>
                <a
                  className="repo"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </SingleProjectStyles>
          );
        }}
      </Query>
    );
  }
}
