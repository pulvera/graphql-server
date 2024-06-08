export const typeDefs = `#graphql
    type Restaurant {
        id: ID!
        name: String!
        branches: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        restaurant_id: Int!
        restaurant_name: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        restaurants: [Restaurant]
        authors: [Author]
    }
`