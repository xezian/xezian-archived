import gql from 'graphql-tag';

const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY {
    projects(orderBy: sortorder_ASC) {
      id
      title
      link
      description
      img
      sortorder
    }
  }
`;
const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($id: ID!) {
    project(where: { id: $id }) {
      id
      title
      link
      repo
      description
      img
      image
      img2
      image2
      img3
      image3
      sortorder
    }
  }
`;

export { ALL_PROJECTS_QUERY, SINGLE_PROJECT_QUERY };
