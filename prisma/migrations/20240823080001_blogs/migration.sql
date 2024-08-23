/*
  Warnings:

  - You are about to drop the column `content` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Blog` DROP COLUMN `content`,
    ADD COLUMN `content1` LONGTEXT NULL,
    ADD COLUMN `content2` LONGTEXT NULL,
    ADD COLUMN `content3` LONGTEXT NULL,
    ADD COLUMN `content4` LONGTEXT NULL;
