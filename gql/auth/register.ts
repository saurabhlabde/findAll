import gql from 'graphql-tag'

export const REGISTER_GQL = gql`
mutation CreateUser($firstname:String!,$lastname:String!,$email:String!,$username:String!,$password:String!){
  createUser(
    create: {
      firstname: $firstname
      lastname: $lastname
      username: $username
      email: $email
      password: $password
    }
  ) {
    id
    firstname
    lastname
    username
    createdAt
    tokens {
      token
    }
  }
}
`