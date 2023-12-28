import { Game } from "@prisma/client";
import { Context } from "../context";

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
    });
  },
  deleteGame: async (_parent: any, args: { id: string }, context: Context) => {
    return await context.prisma.game.delete({
      where: {
        id: args.id,
      },
    });
  },
  updateGame: async (
    _parent: any,
    args: { id: string; game: Partial<Game> },
    context: Context
  ) => {
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
    });
  },
};
