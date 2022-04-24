import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    GetAllRestaurants: [Restaurant!]!
    SingleRestaurant(_id:ID): Restaurant!
  }
  type Restaurant {
    _id: ID!
    name: String!
    location: String!
    price_range: Int!
  }
  type Mutation {
    CreateRestaurant(input: RestaurantInput!): Restaurant!
    deleteRestaurant(_id:ID!): String!
    updateRestaurant(_id:ID!, input: UpdateInput!): String!
  }
  input RestaurantInput {
    name: String!
    location: String!
    price_range: Int!
  }
  input UpdateInput {
    name: String!
    location: String!
    price_range: Int!
  }
`;
