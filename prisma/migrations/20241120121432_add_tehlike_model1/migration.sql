/*
  Warnings:

  - Added the required column `tehlikeSinifi` to the `Nace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Nace` ADD COLUMN `tehlikeSinifi` VARCHAR(191) NOT NULL;
