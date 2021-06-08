import gql from "graphql-tag";

export const APPLY_GQL = gql`
  query GetApply($jobId: number!) {
    getApply(apply: { jobId: $jobId }) {
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
