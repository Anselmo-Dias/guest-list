/*
  Warnings:

  - You are about to drop the `key_word` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `key_word`;

-- CreateTable
CREATE TABLE `keyword` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('ADMIN', 'GUEST') NOT NULL DEFAULT 'GUEST',

    UNIQUE INDEX `keyword_id_key`(`id`),
    UNIQUE INDEX `keyword_name_key`(`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
