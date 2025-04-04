import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const kategoriler = await prisma.firmaEvrakKategori.findMany();
    return kategoriler;
  } catch (error) {
    return {
      status: 500,
      message: 'Kategoriler listelenirken bir hata oluştu.',
      error: error.message,
    };
  }
});
