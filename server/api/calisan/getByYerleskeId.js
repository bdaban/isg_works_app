import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const yerleskeId = query.yerleskeId ? parseInt(query.yerleskeId) : null;

  if (!yerleskeId) {
    return {
      status: 400,
      message: 'Yerleşke ID gerekli.',
    };
  }

  try {
    // Yerleşke ID'ye göre çalışanları getiriyoruz
    const calisanlar = await prisma.calisan.findMany({
      where: { firmaYerleskeId: yerleskeId },
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
