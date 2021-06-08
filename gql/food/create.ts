import gql from 'graphql-tag'

export const CREATE_FOOD_GQL = gql`
mutation CreateFood($media:String!,$title:String!,$category:String!,$schedule:String!){
  createFood(create: { media: $media, title: $title, category: $category, schedule: $schedule }) {
    id
    username
    Food {
      id
      media
      title
      category
      schedule
      createdAt
    }
  }
}
`