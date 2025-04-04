import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params.id; // URL'den id alıyoruz
  const body = await readBody(event); // Gövdeyi (body) alıyoruz

  try {
    // Mevcut eğitimi güncelle
    const updatedEgitim = await prisma.egitim.update({
      where: { id: parseInt(id) },
      data: {
        calisanId: body.calisanId,
        egitimKonuId: body.egitimKonuId,
        egitimTarihi: new Date(body.egitimTarihi),
        gecerlilikTarihi: new Date(body.gecerlilikTarihi),
        sure: body.sure,
        belge: body.belge || null, // Belge var mı kontrol ediyoruz
      }
    });

    return {
      success: true,
      message: 'Eğitim başarıyla güncellendi',
      egitim: updatedEgitim,
    };
  } catch (error) {
    return {
      status: 500,
      message: 'Eğitim güncellenirken bir hata oluştu',
      error: error.message,
    };
  }
});
