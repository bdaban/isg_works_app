import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const kategoriId = query.kategoriId ? parseInt(query.kategoriId) : null;

  if (!kategoriId) {
    return { status: 400, message: 'Kategori ID gerekli.' };
  }

  try {
    const egitimKonular = await prisma.egitimKonu.findMany({
      where: { kategoriId },
    });
    return egitimKonular;
  } catch (error) {
    return { status: 500, message: 'Eğitim konuları getirilirken bir hata oluştu.', error: error.message };
  }
});
