export const typeDefs = `#graphql
  type Game {
    id: ID!
    name: String!
    description: String!
    price: Float!
    company: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    games: [Game!]!
    game(id: ID!): Game!
    authors: [Author!]!
    author(id: ID!): Author!
    reviews: [Review!]!
    review(id: ID!): Review!
  }
  type Mutation {
    addGame(game: GameInput!): Game!
    deleteGame(id: ID!): Game!
    updateGame(id: ID!, game: GameInput!): Game!
    addReview(review: ReviewInput!): Review!
    deleteReview(id: ID!): Review!
    updateReview(id: ID!, review: UpdateReviewInput!): Review!
    addAuthor(author: AuthorInput!): Author!
    deleteAuthor(id: ID!): Author!
    updateAuthor(id: ID!, author: AuthorInput!): Author!
  }
  input GameInput {
    name: String!
    description: String!
    price: Float!
    company: String!
    platform: [String!]!
  }
  input ReviewInput {
    rating: Int!
    content: String!
    game_id: ID!
    author_id: ID!
  }
  input UpdateReviewInput {
    rating: Int
    content: String
  }
  input AuthorInput {
    name: String!
    verified: Boolean!
  }
`