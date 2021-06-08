import gql from "graphql-tag";

export const CREATE_RECIPES_GQL = gql`
  mutation CreateRecipes($media: String!, $title: String!, $category: String!) {
    createRecipes(
      create: { media: $media, title: $title, category: $category }
    ) {
      id
      username
      Recipes {
        id
        media
        title
        category
        createdAt
      }
    }
  }
`;
