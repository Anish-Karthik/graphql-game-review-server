import { Review } from "@prisma/client";
import { Context } from "../context";

export const reviewMutations = {
  addReview: async (
    _parent: any,
    args: { review: Review },
    context: Context
  ) => {
    return await context.prisma.review.create({
      data: {
        content: args.review.content,
        rating: args.review.rating,
        authorId: args.review.authorId,
        gameId: args.review.gameId,
      },
    });
  },
  deleteReview: async (
    _parent: any,
    args: { id: string },
    context: Context
  ) => {
    return await context.prisma.review.delete({
      where: {
        id: args.id,
      },
    });
  },
  updateReview: async (
    _parent: any,
    args: { id: string; review: Partial<Review> },
    context: Context
  ) => {
    return await context.prisma.review.update({
      where: {
        id: args.id,
      },
      data: {
        content: args.review.content,
        rating: args.review.rating,
      },
    });
  },
};
