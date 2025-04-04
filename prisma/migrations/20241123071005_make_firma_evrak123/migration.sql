/*
  Warnings:

  - You are about to drop the column `yuklemeTarihi` on the `FirmaEvrak` table. All the data in the column will be lost.
  - Added the required column `dosyaAdi` to the `FirmaEvrak` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FirmaEvrak` DROP COLUMN `yuklemeTarihi`,
    ADD COLUMN `dosyaAdi` VARCHAR(191) NOT NULL;
