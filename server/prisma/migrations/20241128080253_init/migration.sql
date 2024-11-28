-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `age` INTEGER NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'GUEST') NOT NULL DEFAULT 'GUEST',
    `message` VARCHAR(191) NULL,

    UNIQUE INDEX `user_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bond` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NULL,
    `bond` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,

    UNIQUE INDEX `bond_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `key_word` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('ADMIN', 'GUEST') NOT NULL DEFAULT 'GUEST',

    UNIQUE INDEX `key_word_id_key`(`id`),
    UNIQUE INDEX `key_word_name_key`(`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bond` ADD CONSTRAINT `bond_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
