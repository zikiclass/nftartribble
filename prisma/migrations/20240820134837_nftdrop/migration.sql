/*
  Warnings:

  - You are about to drop the `adminrec` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `adminrec`;

-- CreateTable
CREATE TABLE `nftdrop` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `postedby` VARCHAR(191) NULL,
    `short_description` LONGTEXT NULL,
    `about_author` LONGTEXT NULL,
    `amount` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `period` VARCHAR(191) NULL,
    `authorImg` VARCHAR(191) NULL,
    `NFTImg` VARCHAR(191) NULL,
    `date` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
