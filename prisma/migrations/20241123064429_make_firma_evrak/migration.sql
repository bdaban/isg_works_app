-- CreateTable
CREATE TABLE `FirmaEvrakKategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isim` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FirmaEvrak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firmaId` INTEGER NOT NULL,
    `kategoriId` INTEGER NOT NULL,
    `dosyaYolu` VARCHAR(191) NOT NULL,
    `yuklemeTarihi` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FirmaEvrak` ADD CONSTRAINT `FirmaEvrak_firmaId_fkey` FOREIGN KEY (`firmaId`) REFERENCES `Firma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FirmaEvrak` ADD CONSTRAINT `FirmaEvrak_kategoriId_fkey` FOREIGN KEY (`kategoriId`) REFERENCES `FirmaEvrakKategori`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
