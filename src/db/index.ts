import { Author, Game, PrismaClient } from '@prisma/client'
import { db } from './_db'

export const prisma = new PrismaClient()

export async function fillSampleData() {
  // ... you will write your Prisma Client queries here
  // exclude id from game objects
  await prisma.review.deleteMany({})
  await prisma.game.deleteMany({})
  await prisma.author.deleteMany({})
  const games: Game[] = []
  for (const game of db.games) {
    games.push(await prisma.game.create({
      data: {
        name: game.name,
        description: game.description,
        image: game.image,
        price: game.price,
        company: game.company,
        platform: game.platform,
      }
    }))
  }
  // exclude id from author objects
  // const authors: Author[] = []
  // for (const author of db.authors) {
  //   authors.push(await prisma.author.create({
  //     data: {
  //       name: author.name,
  //       verified: author.verified,
  //     }
  //   }))
  // }
  // // exclude id from review objects
  // console.log(games)
  // console.log(authors)
  // for (const review of db.reviews) {
  //   await prisma.review.create({
  //     data: {
  //       content: review.content,
  //       rating: review.rating,
  //       author: {
  //         connect: {
  //           id: authors[Number(review.author_id) - 1].id,
  //         }
  //       },
  //       game: {
  //         connect: {
  //           id: games[Number(review.game_id) - 1].id,
  //         }
  //       }
  //     }
  //   })
  // }

  // const reviews = await prisma.review.findMany({})

  // console.log(reviews)
}
