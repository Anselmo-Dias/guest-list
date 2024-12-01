-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'GUEST');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "age" INTEGER,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'GUEST',
    "message" TEXT
);

-- CreateTable
CREATE TABLE "bond" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "bond" TEXT NOT NULL,
    "user_id" TEXT
);

-- CreateTable
CREATE TABLE "keyword" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Role" NOT NULL DEFAULT 'GUEST'
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bond_id_key" ON "bond"("id");

-- CreateIndex
CREATE UNIQUE INDEX "keyword_id_key" ON "keyword"("id");

-- CreateIndex
CREATE UNIQUE INDEX "keyword_name_key" ON "keyword"("name");

-- AddForeignKey
ALTER TABLE "bond" ADD CONSTRAINT "bond_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
