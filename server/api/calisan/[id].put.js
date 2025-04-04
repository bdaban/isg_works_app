// PUT (Çalışanı Güncelleme) isteği
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params.id; // ID'yi URL'den al
  const body = await readBody(event);

  try {
    // Çalışanı güncelle
    const updatedCalisan = await prisma.calisan.update({
      where: { id: parseInt(id) },
      data: {
        adi: body.adi,
        soyadi: body.soyadi,
        tc_no: body.tc_no,
        meslegi: body.meslegi,
        isegiristarihi: new Date(body.isegiristarihi),
        isecikistaarihi: body.isecikistaarihi ? new Date(body.isecikistaarihi) : null,
        aktif: body.aktif,
      },
    });

    return {
      success: true,
      message: 'Çalışan başarıyla güncellendi',
      calisan: updatedCalisan,
    };
  } catch (error) {
    return {
      status: 500,
      message: 'Çalışan güncellenirken bir hata oluştu',
      error: error.message,
    };
  }
});
