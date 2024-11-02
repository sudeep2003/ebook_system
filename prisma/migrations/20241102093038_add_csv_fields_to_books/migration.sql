/*
  Warnings:

  - You are about to drop the column `content` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "content",
DROP COLUMN "description",
DROP COLUMN "genre",
DROP COLUMN "imageUrl",
DROP COLUMN "price",
ADD COLUMN     "imageUrlL" TEXT,
ADD COLUMN     "imageUrlM" TEXT,
ADD COLUMN     "imageUrlS" TEXT,
ADD COLUMN     "isbn" TEXT,
ADD COLUMN     "publisher" TEXT,
ADD COLUMN     "yearOfPublication" INTEGER;
