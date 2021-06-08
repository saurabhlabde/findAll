import gql from "graphql-tag";

export const FOOD_GQL = gql`
  query {
    getFood {
      id
      media
      title
      category
      schedule
      createdAt
      User {
        id
        username
      }
    }
  }
`;
