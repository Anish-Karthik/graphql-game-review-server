import { Context } from ".";
import { Author, Game, Review } from "@prisma/client";

export const gameMutations = {
  addGame: async (_parent: any, args: { game: Game }, context: Context) => {
    return await context.prisma.game.create({
      data: {
        name: args.game.name,
        description: args.game.description,
        price: args.game.price,
        company: args.game.company,
        platform: args.game.platform,
      },
    })
  },
  deleteGame: async (_parent: any, args: { id: string }, context: Context) => {
    return await context.prisma.game.delete({
      where: {
        id: args.id,
      },
    })
  },
  updateGame: async (_parent: any, args: { id: string, game: Partial<Game> }, context: Context) => {
    return await context.prisma.game.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.game.name,
        description: args.game.description,
        price: args.game.price,
        company: args.game.company,
        platform: args.game.platform,
      },
    })
  },
}

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
      })
    },
    authors: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.author.findMany({});
    },
    author: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.author.findUnique({
        where: {
          id: args.id,
        },
      })
    },
    reviews: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.review.findMany({});
    },
    review: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.review.findUnique({
        where: {
          id: args.id,
        },
      })
    },
  },
  Game: {
    reviews: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.review.findMany({
        where: {
          gameId: parent.id,
        },
      })
    },
  },
  Author: {
    reviews: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.review.findMany({
        where: {
          authorId: parent.id,
        },
      })
    },
  },
  Review: {
    game: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.game.findUnique({
        where: {
          id: parent.gameId,
        },
      })
    },
    author: async (parent: any, _args: any, context : Context) => {
      return await context.prisma.author.findUnique({
        where: {
          id: parent.authorId,
        },
      })
    }
  },
  Mutation: {
    ...gameMutations,
    addAuthor: async (_parent: any, args: { author: Author }, context: Context) => {
      return await context.prisma.author.create({
        data: {
          name: args.author.name,
          verified: args.author.verified,
        },
      })
    },
    deleteAuthor: async (_parent: any, args: { id: string }, context: Context) => {
      return await context.prisma.author.delete({
        where: {
          id: args.id,
        },
      })
    },
    updateAuthor: async (_parent: any, args: { id: string, author: Partial<Author> }, context: Context) => {
      return await context.prisma.author.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.author.name,
          verified: args.author.verified,
        },
      })
    },
    addReview: async (_parent: any, args: { review: Review } , context: Context) => {
      return await context.prisma.review.create({
        data: {
          content: args.review.content,
          rating: args.review.rating,
          authorId: args.review.authorId,
          gameId: args.review.gameId,
        },
      })
    },
    deleteReview: async (_parent: any, args: { id: string }, context: Context) => {
      return await context.prisma.review.delete({
        where: {
          id: args.id,
        },
      })
    },
    updateReview: async (_parent: any, args: { id: string, review: Partial<Review> }, context: Context) => {
      return await context.prisma.review.update({
        where: {
          id: args.id,
        },
        data: {
          content: args.review.content,
          rating: args.review.rating,
        },
      })
    },
  }
};