import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event); // Tek bir çalışan verisi geliyor
    
    // Çalışanı veritabanına ekle
    const newCalisan = await prisma.calisan.create({
      data: {
        adi: body.adi,
        soyadi: body.soyadi,
        tc_no: String(body.tc_no), // TC numarasını string olarak kullan
        meslegi: body.meslegi,
        firmaId: body.firmaId,
        firmaYerleskeId: body.firmaYerleskeId,
        isegiristarihi: new Date(body.isegiristarihi),
        isecikistaarihi: body.isecikistaarihi ? new Date(body.isecikistaarihi) : null,
        aktif: body.aktif,
      },
    });

    return {
      success: true,
      message: 'Çalışan başarıyla eklendi',
      calisan: newCalisan,
    };
  } catch (error) {
    console.error('Hata oluştu:', error);
    return {
      status: 500,
      message: 'Çalışan eklenirken bir hata oluştu',
      error: error.message,
    };
  }
});




/* import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const results = []
  
  // Gelen verilerde her bir çalışanı veritabanına ekleyelim
  for (const calisan of body) {
    try {
      const newCalisan = await prisma.calisan.create({
        data: {
          adi: calisan.adi,
          soyadi: calisan.soyadi,
          tc_no: String(calisan.tc_no),  // TC No'yu string'e çeviriyoruz
          meslegi: calisan.meslegi,
          firmaId: calisan.firmaId,
          firmaYerleskeId: calisan.firmaYerleskeId,
          isegiristarihi: new Date(calisan.isegiristarihi),
          isecikistaarihi: calisan.isecikistaarihi ? new Date(calisan.isecikistaarihi) : null,
          aktif: calisan.aktif,
        },
      })
      results.push({ success: true, calisan: newCalisan })
    } catch (error) {
      if (error.code === 'P2002' && error.meta && error.meta.target === 'Calisan_tc_no_key') {
        // Unique constraint hatası (aynı TC no)
        console.warn(`Aynı TC no ile kayıt mevcut: ${calisan.tc_no}`)
        results.push({ success: false, message: `Aynı TC no ile kayıt mevcut: ${calisan.tc_no}` })
      } else {
        // Diğer hatalar
        console.error('Hata oluştu:', error)
        results.push({ success: false, message: `Hata oluştu: ${error.message}` })
      }
    }
  }

  return results
})
 */