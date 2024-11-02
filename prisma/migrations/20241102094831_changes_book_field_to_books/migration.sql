/*
  Warnings:

  - You are about to drop the column `imageUrlL` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrlM` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrlS` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `isbn` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publisher` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `yearOfPublication` on the `Book` table. All the data in the column will be lost.
  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "imageUrlL",
DROP COLUMN "imageUrlM",
DROP COLUMN "imageUrlS",
DROP COLUMN "isbn",
DROP COLUMN "publisher",
DROP COLUMN "yearOfPublication",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
