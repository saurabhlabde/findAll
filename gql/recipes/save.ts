import gql from "graphql-tag";

export const SAVE_GQL = gql`
  query GetSave($recipeId: number!) {
    getSave(save: { recipeId: $recipeId }) {
      id
      createdAt
      recipesId
      User {
        id
        username
      }
    }
  }
`;
