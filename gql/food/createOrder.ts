import gql from "graphql-tag";

export const CREATE_ORDER_GQL = gql`
  mutation CreateOrder(
    $foodId: number!
    $street: String!
    $city: String!
    $state: String!
    $zipCode: String!
  ) {
    createOrder(
      create: {
        foodId: $foodId
        street: $street
        city: $city
        state: $state
        zipCode: $zipCode
      }
    ) {
      id
      foodId
      createdAt
      street
      city
      state
      zipCode
      phoneNumber
      User {
        id
        username
      }
    }
  }
`;
