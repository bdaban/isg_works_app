 import { PrismaClient } from "@prisma/client"
 const prisma = new PrismaClient()



export default defineEventHandler(async (event) => {
  // Tüm firmaları firma adlarıyla birlikte getir
  const yerleskeler = await prisma.yerleske.findMany({
    select: {
      id:true,
      subeAdi: true,
      adres: true,
      telefon: true,
      yetkili: true,
      sgkSicilNo: true,
      firma: {
        select: {
          firmaAdi: true, // Sadece firmaAdi alanını alıyoruz
          id:true,
        }
      },
      nace:{
        select:{
          kod:true,
          tehlikeSinifi:true
        }
      }
    }
  });

  return yerleskeler;
});
