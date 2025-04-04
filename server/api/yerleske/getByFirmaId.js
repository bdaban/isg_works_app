import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // Query parametresinden firmaId'yi alıyoruz
  const query = getQuery(event);
  const firmaId = query.firmaId ? parseInt(query.firmaId) : null;

  // Firma ID'si kontrolü
  if (!firmaId) {
    return {
      status: 400,
      message: 'Firma ID gerekli.',
    };
  }

  try {
    // Yerleşkeleri firmaId'ye göre çekiyoruz
    const yerleskeler = await prisma.yerleske.findMany({
      where: { firmaId }, // firmaId'ye göre filtreleme
      include: {
        firma: true, // Firma bilgilerini dahil et
        nace: true,  // NACE bilgilerini dahil et
      },

    });

    return yerleskeler
    
  } catch (error) {
    return {
      status: 500,
      message: 'Yerleşkeler listelenirken bir hata oluştu.',
      error: error.message,
    };
  }
});
