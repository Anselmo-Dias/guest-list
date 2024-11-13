-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'GUEST');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'GUEST',
    "message" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "bond" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "userId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bond_id_key" ON "bond"("id");

-- AddForeignKey
ALTER TABLE "bond" ADD CONSTRAINT "bond_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
