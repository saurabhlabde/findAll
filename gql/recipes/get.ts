import gql from "graphql-tag";

export const RECIPES_GQL = gql`
  query {
    getRecipes {
      id
      media
      title
      category
      createdAt
      User {
        id
        username
      }
    }
  }
`;
