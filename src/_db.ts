
let games = [
  {
    id: "1",
    name: "The Lord of the Rings",
    description: "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    price: 10.99,
    platform: ["PC", "Xbox", "Playstation"],
    company: "EA",
  },
  {
    id: "2",
    name: "Harry Potter",
    description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
    price: 9.99,
    platform: ["PC", "Xbox", "Playstation"],
    company: "EA",
  },
  {
    id: "3",
    name: "A Song of Ice and Fire",
    description: "A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin.",
    price: 8.99,
    platform: ["PC", "Xbox", "Playstation"],
    company: "EA",
  },
  {
    id: "4",
    name: "The Stand",
    description: "The Stand is a post-apocalyptic dark fantasy novel written by American author Stephen King.",
    price: 7.99,
    platform: ["PC", "Xbox", "Playstation"],
    company: "EA",
  },
  {
    id: "5",
    name: "The Catcher in the Rye",
    description: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951.",
    price: 6.99,
    platform: ["PC", "Xbox", "Playstation"],
    company: "EA",
  }
];

let authors = [
  {
    id: "1",
    name: "John",
    verified: true,
  },
  {
    id: "2",
    name: "Anish",
    verified: true,
  },
  {
    id: "3",
    name: "Sara",
    verified: true,
  },
];

let reviews = [
  {
    id: "1",
    rating: 5,
    content: "This game is amazing!",
    author_id: "1",
    game_id: "2",
  },
  {
    id: "2",
    rating: 4,
    content: "This game is good!",
    author_id: "2",
    game_id: "1",
  },
  {
    id: "3",
    rating: 3,
    content: "This game is ok!",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 2,
    content: "This game is bad!",
    author_id: "1",
    game_id: "4",
  },
  {
    id: "5",
    rating: 1,
    content: "This game is terrible!",
    author_id: "2",
    game_id: "5",
  },
  {
    id: "6",
    rating: 5,
    content: "This game is amazing!",
    author_id: "3",
    game_id: "1",
  },
  {
    id: "7",
    rating: 4,
    content: "This game is good!",
    author_id: "1",
    game_id: "2",
  },
  {
    id: "8",
    rating: 3,
    content: "This game is ok!",
    author_id: "2",
    game_id: "3",
  },
  {
    id: "9",
    rating: 2,
    content: "This game is bad!",
    author_id: "3",
    game_id: "4",
  },
  {
    id: "10",
    rating: 1,
    content: "This game is terrible!",
    author_id: "1",
    game_id: "5",
  }
]

export const db = {
  games,
  authors,
  reviews,
}