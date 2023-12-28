import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { fillSampleData, prisma } from "./db";
import { PrismaClient } from "@prisma/client";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

// fillSampleData();

export type Context = {
  prisma: PrismaClient;
};

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
