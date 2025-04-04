/*
  Warnings:

  - Added the required column `kategoriId` to the `EgitimKonu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `EgitimKonu` ADD COLUMN `kategoriId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Kategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isim` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EgitimKonu` ADD CONSTRAINT `EgitimKonu_kategoriId_fkey` FOREIGN KEY (`kategoriId`) REFERENCES `Kategori`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
