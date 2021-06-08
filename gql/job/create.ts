import gql from "graphql-tag";

export const CREATE_JOB_GQL = gql`
  mutation CreateJob($media: String!, $title: String!, $location: String!) {
    createJob(create: { media: $media, title: $title, location: $location }) {
      id
      username
      Job {
        id
        media
        title
        location
        createdAt
      }
    }
  }
`;
