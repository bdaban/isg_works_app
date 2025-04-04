// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// export default defineEventHandler(async (event) =>{
// const body = await readBody(event);

// const egitimdata= await prisma.egitim.create({
//     data:{
//       calisanId:parseInt(body.calisanId),
//       egitimKonuId: body.egitimKonuId,  
//       egitimTarihi: new Date(body.egitimTarihi),
//       gecerlilikTarihi: new Date(body.gecerlilikTarihi),
//       sure: parseInt(body.sure, 10),  
//       belge: body.belge || null,
        

//     }
// });

// return egitimdata ;



// })

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { payloads } = await readBody(event);

  if (!payloads || payloads.length === 0) {
    return {
      status: 400,
      message: "Kaydedilecek veri bulunamadı.",
    };
  }

  try {
    // Toplu veri ekleme
    await prisma.egitim.createMany({
      data: payloads.map((payload) => ({
        calisanId: payload.calisanId,
        egitimKonuId: payload.egitimKonuId,
        egitimTarihi: new Date(payload.egitimTarihi),
        gecerlilikTarihi: new Date(payload.gecerlilikTarihi),
        sure: parseInt(payload.sure, 10),
        belge: payload.belge || null,
      })),
    });

    return {
      status: 200,
      message: "Eğitimler başarıyla kaydedildi.",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Eğitim kaydedilirken bir hata oluştu.",
      error: error.message,
    };
  }
});
