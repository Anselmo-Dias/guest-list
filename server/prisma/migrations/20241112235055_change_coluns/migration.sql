/*
  Warnings:

  - Added the required column `bond` to the `bond` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bond" ADD COLUMN     "bond" TEXT NOT NULL;
