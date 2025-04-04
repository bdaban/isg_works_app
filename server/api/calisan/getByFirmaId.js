import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const firmaId = query.firmaId ? parseInt(query.firmaId) : null;

  if (!firmaId) {
    return {
      status: 400,
      message: 'Firma ID gerekli.',
    };
  }

  try {
    // Yerleşke ID'ye göre çalışanları getiriyoruz
    const calisanlar = await prisma.calisan.findMany({
      where: { firmaId: firmaId },
      include: {
        firma: true,
        yerleske: true,
      },
    });

    return calisanlar;
  } catch (error) {
    return {
      status: 500,
      message: 'Çalışanlar listelenirken bir hata oluştu.',
      error: error.message,
    };
  }
});
