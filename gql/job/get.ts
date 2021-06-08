import gql from "graphql-tag";

export const JOB_GQL = gql`
  query {
    getJob {
      id
      media
      title
      location
      createdAt
      User {
        id
        username
      }
    }
  }
`;
