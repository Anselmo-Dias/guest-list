-- CreateTable
CREATE TABLE `key_word` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('ADMIN', 'GUEST') NOT NULL DEFAULT 'GUEST',

    UNIQUE INDEX `key_word_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
