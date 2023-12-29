import { Author } from "@prisma/client";
import { Context } from "../context";

type UserQueryObject = {id: string} | { userId: string }

export const authorMutations = {
  addAuthor: async (
    _parent: any,
    args: { author: Author },
    context: Context
  ) => {
    return await context.prisma.author.create({
      data: {
        userId: args.author.userId,
        name: args.author.name,
        image: args.author.image,
        verified: args.author.verified,
      },
    });
  },
  deleteAuthor: async (
    _parent: any,
    args: { id: string },
    context: Context
  ) => {
    let queryObject: UserQueryObject = { id: args.id }
    if (args.id.includes("user_")) {
      queryObject = { userId: args.id }
    }
    return await context.prisma.author.delete({
      where: queryObject,
    });
  },
  updateAuthor: async (
    _parent: any,
    args: { id: string; author: Partial<Author> },
    context: Context
  ) => {
    let queryObject: UserQueryObject = { id: args.id }
    if (args.id.includes("user_")) {
      queryObject = { userId: args.id }
    }
    return await context.prisma.author.update({
      where: queryObject,
      data: {
        name: args.author.name,
        verified: args.author.verified,
        image: args.author.image
      },
    });
  },
};
