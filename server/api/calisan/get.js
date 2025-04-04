import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
const calisanlar = await prisma.calisan.findMany({
select:{
    id:true,
    firmaId:true,
    aktif:true,
    adi:true,
    firmaYerleskeId:true,
    isegiristarihi:true,
    isecikistaarihi:true,
    meslegi:true,
    soyadi:true,
    tc_no:true,
    firma:{
        select:{
            firmaAdi:true
        }
    },
    yerleske:{
        select:{
            subeAdi:true
        }
    },
    saglikRaporlari: {  // Sağlık raporu ilişkilendirilmesi
        select: {
          raporUrl: true,
          gecerlilikTarihi: true,
        },
      },
      sertifikalar: {  // Sertifika ilişkilendirilmesi
        select: {
          sertifikaUrl: true,
          gecerlilikTarihi: true,
        },
      },


},




})

return calisanlar


});