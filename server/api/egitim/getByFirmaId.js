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
    const egitimler = await prisma.egitim.findMany({
      where: { calisan: { firmaId } },
      include: {
        calisan: {
          include: {
            firma: true,
            yerleske: true,
          }
        },
        egitimKonu: true,
      }
    });

    return egitimler;
  } catch (error) {
    return {
      status: 500,
      message: 'Eğitimler listelenirken bir hata oluştu.',
      error: error.message,
    };
  }
});
