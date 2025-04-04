import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const kategoriler = await prisma.kategori.findMany({
      include: {
        egitimKonular: true, // İlgili eğitim konularını dahil et
      },
    });
    return kategoriler;
  } catch (error) {
    return {
      status: 500,
      message: 'Kategoriler listelenirken bir hata oluştu.',
      error: error.message,
    };
  }
});
