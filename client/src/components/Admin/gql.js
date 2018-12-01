import gql from 'graphql-tag';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($name: String!, $password: String!) {
    signin(name: $name, password: $password) {
      id
      name
    }
  }
`;
const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;
const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      name
    }
  }
`;

export { SIGNIN_MUTATION, SIGNOUT_MUTATION, CURRENT_USER_QUERY };
