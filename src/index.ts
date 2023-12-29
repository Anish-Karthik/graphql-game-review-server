import cors from "cors";
import express, { json } from "express";
import { fillSampleData, prisma } from "./db";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { Context } from "./graphql/context";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

// fillSampleData();
const PORT = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer<Context>({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

app.use(
  '/graphql',
  cors(),
  json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res, prisma }),
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// const { url } = await startStandaloneServer<Context>(server, {
//   context: async ({ req, res }) => ({ req, res, prisma }),
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);
