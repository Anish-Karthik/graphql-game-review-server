import { Author } from "@prisma/client";
import { Context } from "../context";

export const authorMutations = {
  addAuthor: async (
    _parent: any,
    args: { author: Author },
    context: Context
  ) => {
    return await context.prisma.author.create({
      data: {
        name: args.author.name,
        verified: args.author.verified,
      },
    });
  },
  deleteAuthor: async (
    _parent: any,
    args: { id: string },
    context: Context
  ) => {
    return await context.prisma.author.delete({
      where: {
        id: args.id,
      },
    });
  },
  updateAuthor: async (
    _parent: any,
    args: { id: string; author: Partial<Author> },
    context: Context
  ) => {
    return await context.prisma.author.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.author.name,
        verified: args.author.verified,
      },
    });
  },
};
