-- CreateTable
CREATE TABLE `Firma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firmaKodu` INTEGER NOT NULL,
    `firmaAdi` VARCHAR(191) NOT NULL,
    `adres` VARCHAR(191) NOT NULL,
    `il` VARCHAR(191) NOT NULL,
    `ilce` VARCHAR(191) NOT NULL,
    `telefon` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `yetkili` VARCHAR(191) NOT NULL,
    `naceKodu` VARCHAR(191) NOT NULL,
    `isgkSicilNo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Firma_firmaKodu_key`(`firmaKodu`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Yerleske` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firmaId` INTEGER NOT NULL,
    `subeAdi` VARCHAR(191) NOT NULL,
    `adres` VARCHAR(191) NOT NULL,
    `tehlikeSinifi` VARCHAR(191) NOT NULL,
    `naceKodu` VARCHAR(191) NOT NULL,
    `telefon` VARCHAR(191) NOT NULL,
    `yetkili` VARCHAR(191) NOT NULL,
    `sgkSicilNo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Calisan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `adi` VARCHAR(191) NOT NULL,
    `soyadi` VARCHAR(191) NOT NULL,
    `tc_no` VARCHAR(191) NOT NULL,
    `meslegi` VARCHAR(191) NOT NULL,
    `firmaId` INTEGER NOT NULL,
    `firmaYerleskeId` INTEGER NOT NULL,
    `isegiristarihi` DATETIME(3) NOT NULL,
    `isecikistaarihi` DATETIME(3) NULL,
    `aktif` BOOLEAN NOT NULL,

    UNIQUE INDEX `Calisan_tc_no_key`(`tc_no`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EgitimKonu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `baslik` VARCHAR(191) NOT NULL,
    `aciklama` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Egitim` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calisanId` INTEGER NOT NULL,
    `egitimKonuId` INTEGER NOT NULL,
    `egitimTarihi` DATETIME(3) NOT NULL,
    `gecerlilikTarihi` DATETIME(3) NOT NULL,
    `sure` INTEGER NOT NULL,
    `belge` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SaglikRapor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calisanId` INTEGER NOT NULL,
    `raporUrl` VARCHAR(191) NOT NULL,
    `gecerlilikTarihi` DATETIME(3) NOT NULL,
    `yuklemeTarihi` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sertifika` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calisanId` INTEGER NOT NULL,
    `sertifikaUrl` VARCHAR(191) NOT NULL,
    `gecerlilikTarihi` DATETIME(3) NOT NULL,
    `yuklemeTarihi` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nace` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kod` VARCHAR(191) NOT NULL,
    `tanim` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Nace_kod_key`(`kod`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Yerleske` ADD CONSTRAINT `Yerleske_firmaId_fkey` FOREIGN KEY (`firmaId`) REFERENCES `Firma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Calisan` ADD CONSTRAINT `Calisan_firmaYerleskeId_fkey` FOREIGN KEY (`firmaYerleskeId`) REFERENCES `Yerleske`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Calisan` ADD CONSTRAINT `Calisan_firmaId_fkey` FOREIGN KEY (`firmaId`) REFERENCES `Firma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Egitim` ADD CONSTRAINT `Egitim_calisanId_fkey` FOREIGN KEY (`calisanId`) REFERENCES `Calisan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Egitim` ADD CONSTRAINT `Egitim_egitimKonuId_fkey` FOREIGN KEY (`egitimKonuId`) REFERENCES `EgitimKonu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaglikRapor` ADD CONSTRAINT `SaglikRapor_calisanId_fkey` FOREIGN KEY (`calisanId`) REFERENCES `Calisan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sertifika` ADD CONSTRAINT `Sertifika_calisanId_fkey` FOREIGN KEY (`calisanId`) REFERENCES `Calisan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
