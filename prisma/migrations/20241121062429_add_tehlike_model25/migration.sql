/*
  Warnings:

  - You are about to drop the column `naceKodu` on the `Yerleske` table. All the data in the column will be lost.
  - You are about to drop the column `tehlikeSinifi` on the `Yerleske` table. All the data in the column will be lost.
  - Added the required column `naceId` to the `Yerleske` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Yerleske` DROP COLUMN `naceKodu`,
    DROP COLUMN `tehlikeSinifi`,
    ADD COLUMN `naceId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Yerleske` ADD CONSTRAINT `Yerleske_naceId_fkey` FOREIGN KEY (`naceId`) REFERENCES `Nace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
