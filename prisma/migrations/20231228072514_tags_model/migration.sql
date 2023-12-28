/*
  Warnings:

  - The `platform` column on the `Game` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('PC', 'Xbox', 'Playstation', 'Nintendo', 'Android', 'IOS', 'Other');

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "platform",
ADD COLUMN     "platform" "Platform"[];
