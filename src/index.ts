import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { prisma } from "./db";
import { Context } from "./graphql/context";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

// fillSampleData();



const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const { url } = await startStandaloneServer<Context>(server, {
  context: async ({ req, res }) => ({ req, res, prisma }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
