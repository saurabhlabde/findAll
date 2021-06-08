import gql from "graphql-tag";

export const CREATE_ORDER_GQL = gql`
  query GetOrder($foodId: number!) {
    getOrder(order: { foodId: $foodId }) {
      id
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
