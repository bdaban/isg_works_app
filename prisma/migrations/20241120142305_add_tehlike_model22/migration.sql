/*
  Warnings:

  - Added the required column `naceId` to the `Firma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Firma` ADD COLUMN `naceId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Firma` ADD CONSTRAINT `Firma_naceId_fkey` FOREIGN KEY (`naceId`) REFERENCES `Nace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
