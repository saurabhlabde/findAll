import gql from "graphql-tag";

export const CREATE_APPLY_GQL = gql`
  mutation CreateApply(
    $jobId: number!
    $eduction: String!
    $city: String!
    $zipCode: String!
    $phoneNumber: String!
  ) {
    createApply(
      create: {
        jobId: $jobId
        eduction: $eduction
        city: $city
        zipCode: $zipCode
        phoneNumber: $phoneNumber
      }
    ) {
      id
      createdAt
      eduction
      city
      zipCode
      phoneNumber
      User {
        id
        username
      }
    }
  }
`;
