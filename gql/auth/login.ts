import gql from 'graphql-tag'

export const LOGIN_GQL = gql`
mutation Login($username:String!,$password:String!){
  login(
        login: {
      username: $username
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