import gql from "graphql-tag";

export const typeDefs = gql`
  enum Platform {
    PC
    Xbox
    Playstation
    Nintendo
    Android
    IOS
    Other
  }
  type Game {
    id: ID!
    name: String!
    description: String!
    image: String!
    price: Float!
    company: String!
    platform: [Platform!]!
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
    userId: String!
    image: String!
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
    addGame(game: AddGameInput!): Game!
    deleteGame(id: ID!): Game!
    updateGame(id: ID!, game: UpdateGameInput!): Game!
    addReview(review: AddReviewInput!): Review!
    deleteReview(id: ID!): Review!
    updateReview(id: ID!, review: UpdateReviewInput!): Review!
    addAuthor(author: AddAuthorInput!): Author!
    deleteAuthor(id: ID!): Author!
    updateAuthor(id: ID!, author: UpdateAuthorInput!): Author!
  }
  input AddGameInput {
    name: String!
    description: String!
    image: String!
    price: Float!
    company: String!
    platform: [String!]!
  }
  input UpdateGameInput {
    name: String
    description: String
    image: String
    price: Float
    company: String
    platform: [String!]
  }
  input AddReviewInput {
    rating: Int!
    content: String!
    game_id: ID!
    author_id: ID!
  }
  input UpdateReviewInput {
    rating: Int
    content: String
  }
  input AddAuthorInput {
    userId: String!
    name: String!
    image: String!
    verified: Boolean!
  }
  input UpdateAuthorInput {
    name: String
    image: String
    verified: Boolean
  }
`;
