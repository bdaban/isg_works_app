import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const calisanId = query.calisanId ? parseInt(query.calisanId) : null;

  if (!calisanId) {
    return {
      status: 400,
      message: 'Çalışan ID gerekli.',
    };
  }

  try {
    const egitimler = await prisma.egitim.findMany({
      where: { calisanId: calisanId },
      include: {
        egitimKonu: true,
      },
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
