/*
  Warnings:

  - You are about to drop the column `userId` on the `bond` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "bond" DROP CONSTRAINT "bond_userId_fkey";

-- AlterTable
ALTER TABLE "bond" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "message" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "bond" ADD CONSTRAINT "bond_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
