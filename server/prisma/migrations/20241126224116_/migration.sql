/*
  Warnings:

  - Added the required column `name` to the `key_word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `key_word` ADD COLUMN `name` VARCHAR(191) NOT NULL;
