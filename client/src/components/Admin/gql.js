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
const CREATE_PROJECT_MUTATION = gql`
  mutation CREATE_PROJECT_MUTATION(
    $title: String!
    $link: String!
    $repo: String
    $description: String!
    $img: String
    $image: String
    $img2: String
    $image2: String
    $img3: String
    $image3: String
  ) {
    createProject(
      title: $title
      link: $link
      repo: $repo
      description: $description
      img: $img
      image: $image
      img2: $img2
      image2: $image2
      img3: $img3
      image3: $image3
    ) {
      id
    }
  }
`;
const SORT_ORDER_MUTATION = gql`
  mutation SORT_ORDER_MUTATION($id: ID!, $amount: Int!, $sortorder: Int!) {
    sortOrder(id: $id, amount: $amount, sortorder: $sortorder) {
      message
    }
  }
`;

export {
  SIGNIN_MUTATION,
  SIGNOUT_MUTATION,
  CURRENT_USER_QUERY,
  CREATE_PROJECT_MUTATION,
  SORT_ORDER_MUTATION
};
