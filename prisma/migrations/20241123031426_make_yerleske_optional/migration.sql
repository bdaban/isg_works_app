-- DropForeignKey
ALTER TABLE `Calisan` DROP FOREIGN KEY `Calisan_firmaYerleskeId_fkey`;

-- AlterTable
ALTER TABLE `Calisan` MODIFY `firmaYerleskeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Calisan` ADD CONSTRAINT `Calisan_firmaYerleskeId_fkey` FOREIGN KEY (`firmaYerleskeId`) REFERENCES `Yerleske`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
