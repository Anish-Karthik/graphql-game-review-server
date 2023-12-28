import { db } from "./_db";

export const resolvers = {
  Query: {
    games: () => db.games,
    game: (_parent: any, { id }: any) => db.games.find((game) => game.id === id),
    authors: () => db.authors,
    author: (_parent: any, { id }: any) => db.authors.find((author) => author.id === id),
    reviews: () => db.reviews,
    review: (_parent: any, { id }: any) => db.reviews.find((review) => review.id === id),
  },
  Game: {
    reviews: (parent: any) => db.reviews.filter((review) => review.game_id === parent.id),
  },
  Author: {
    reviews: (parent: any) => db.reviews.filter((review) => review.author_id === parent.id),
  },
  Review: {
    game: (parent: any) => db.games.find((game) => game.id === parent.game_id),
    author: (parent: any) => db.authors.find((author) => author.id === parent.author_id),
  },
  Mutation: {
    addGame: (_parent: any, { game }: any) => {
      const newGame = {
        id: String(Math.floor(Math.random() * 100000)),
        ...game,
      };
      db.games.push(newGame);
      return newGame;
    },
    deleteGame: (_parent: any, { id }: any) => {
      const gameIndex = db.games.findIndex((game) => game.id === id);
      if (gameIndex === -1) throw new Error("Game not found");
      const deletedGame = db.games.splice(gameIndex, 1)[0];
      return deletedGame;
    },
    updateGame: (_parent: any, { id, game }: any) => {
      const gameIndex = db.games.findIndex((game) => game.id === id);
      if (gameIndex === -1) throw new Error("Game not found");
      const updatedGame = {
        ...db.games[gameIndex],
        ...game,
      };
      db.games[gameIndex] = updatedGame;
      return updatedGame;
    },
    addReview: (_parent: any, { review }: any) => {
      const newReview = {
        id: String(Math.floor(Math.random() * 100000)),
        ...review,
      };
      db.reviews.push(newReview);
      return newReview;
    },
    deleteReview: (_parent: any, { id }: any) => {
      const reviewIndex = db.reviews.findIndex((review) => review.id === id);
      if (reviewIndex === -1) throw new Error("Review not found");
      const deletedReview = db.reviews.splice(reviewIndex, 1)[0];
      return deletedReview;
    },
    updateReview: (_parent: any, { id, review }: any) => {
      const reviewIndex = db.reviews.findIndex((review) => review.id === id);
      if (reviewIndex === -1) throw new Error("Review not found");
      const updatedReview = {
        ...db.reviews[reviewIndex],
        ...review,
      };
      db.reviews[reviewIndex] = updatedReview;
      return updatedReview;
    },
    addAuthor: (_parent: any, { author }: any) => {
      const newAuthor = {
        id: String(Math.floor(Math.random() * 100000)),
        ...author,
      };
      db.authors.push(newAuthor);
      return newAuthor;
    },
    deleteAuthor: (_parent: any, { id }: any) => {
      const authorIndex = db.authors.findIndex((author) => author.id === id);
      if (authorIndex === -1) throw new Error("Author not found");
      const deletedAuthor = db.authors.splice(authorIndex, 1)[0];
      return deletedAuthor;
    },
    updateAuthor: (_parent: any, { id, author }: any) => {
      const authorIndex = db.authors.findIndex((author) => author.id === id);
      if (authorIndex === -1) throw new Error("Author not found");
      const updatedAuthor = {
        ...db.authors[authorIndex],
        ...author,
      };
      db.authors[authorIndex] = updatedAuthor;
      return updatedAuthor;
    },
  }
};