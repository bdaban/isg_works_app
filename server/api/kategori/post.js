import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.isim) {
    return {
      status: 400,
      message: 'Kategori adı gereklidir.',
    };
  }

  try {
    const yeniKategori = await prisma.kategori.create({
      data: {
        isim: body.isim,
      },
    });
    return yeniKategori;
  } catch (error) {
    return {
      status: 500,
      message: 'Kategori eklenirken bir hata oluştu.',
      error: error.message,
    };
  }
});
