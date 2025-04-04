/*
  Warnings:

  - Added the required column `evrakTuru` to the `FirmaEvrak` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FirmaEvrak` ADD COLUMN `evrakTuru` VARCHAR(191) NOT NULL,
    ADD COLUMN `yuklenmeTarihi` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
