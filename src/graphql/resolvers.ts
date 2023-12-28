import { Context } from "./context";
import { authorMutations, gameMutations, reviewMutations } from "./mutations";

export const resolvers = {
  Query: {
    games: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.game.findMany({});
    },
    game: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.game.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    authors: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.author.findMany({});
    },
    author: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.author.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    reviews: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.review.findMany({});
    },
    review: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.review.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Game: {
    reviews: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.review.findMany({
        where: {
          gameId: parent.id,
        },
      });
    },
  },
  Author: {
    reviews: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.review.findMany({
        where: {
          authorId: parent.id,
        },
      });
    },
  },
  Review: {
    game: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.game.findUnique({
        where: {
          id: parent.gameId,
        },
      });
    },
    author: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.author.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
  },
  Mutation: {
    ...gameMutations,
    ...authorMutations,
    ...reviewMutations,
  },
};
