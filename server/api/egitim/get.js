import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler(async (event) => {
    try {
      const egitimler = await prisma.egitim.findMany({
        include: {
          calisan:{
            include:{
              firma:true,
              yerleske:true,
            }
          } ,
          egitimKonu:{
            include:{
              kategori: true
            }

          } ,
        }
      });
  
      return egitimler
    } catch (error) {
      return {
        status: 500,
        message: 'Eğitimler listelenirken bir hata oluştu.',
        error: error.message,
      };
    }
  });
  