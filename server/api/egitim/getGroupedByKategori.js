import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  try {
    const kategoriler = await prisma.kategori.findMany({
      include: {
        egitimKonular: {
          include: {
            egitimler: {
              include: {
                calisan: true, // Eğitim alan çalışan bilgisi
              },
            },
          },
        },
      },
    });

    return {
      status: 200,
      data: kategoriler,
    };
  } catch (error) {
    return {
      status: 500,
      message: 'Kategorilere göre eğitimler getirilirken bir hata oluştu.',
      error: error.message,
    };
  }
});
