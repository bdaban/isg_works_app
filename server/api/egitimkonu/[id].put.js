import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.id || !body.baslik || !body.kategoriId) {
    return {
      status: 400,
      message: 'ID, başlık ve kategori ID gereklidir.',
    };
  }

  try {
    const guncellenenEgitimKonu = await prisma.egitimKonu.update({
      where: { id: body.id },
      data: {
        baslik: body.baslik,
        aciklama: body.aciklama,
        kategoriId: body.kategoriId,
      },
    });
    return guncellenenEgitimKonu;
  } catch (error) {
    return {
      status: 500,
      message: 'Eğitim konusu güncellenirken bir hata oluştu.',
      error: error.message,
    };
  }
});
