import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  try {
    // Veritabanında en yüksek firma kodunu getir
    const latestFirma = await prisma.firma.findFirst({
      orderBy: {
        firmaKodu: 'desc', // En yüksek firma kodunu getir
      },
    });

    const nextFirmaKodu = latestFirma ? parseInt(latestFirma.firmaKodu) + 1 : 1; // Firma kodu yoksa 1 ile başla

    return { success: true, nextFirmaKodu };
  } catch (error) {
    console.error('Hata:', error);
    return { success: false, message: 'Firma kodu alınırken bir hata oluştu.' };
  }
});
