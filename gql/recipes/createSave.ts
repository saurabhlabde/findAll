import gql from "graphql-tag";

export const CREATE_SAVE_GQL = gql`
  mutation CreateSave($recipeId: number!) {
    createSave(create: { recipeId: $recipeId }) {
      id
      recipesId
      createdAt
      User {
        id
        username
      }
    }
  }
`;
