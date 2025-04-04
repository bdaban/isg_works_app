import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.baslik || !body.kategoriId) {
    return {
      status: 400,
      message: 'Başlık ve kategori ID gereklidir.',
    };
  }

  try {
    const yeniEgitimKonu = await prisma.egitimKonu.create({
      data: {
        baslik: body.baslik,
        aciklama: body.aciklama,
        kategoriId: body.kategoriId,
      },
    });
    return yeniEgitimKonu;
  } catch (error) {
    return {
      status: 500,
      message: 'Eğitim konusu eklenirken bir hata oluştu.',
      error: error.message,
    };
  }
});
