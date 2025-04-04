import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
  
    try {
      const deletedEgitim = await prisma.egitim.delete({
        where: { id: parseInt(id) }
      });
  
      return {
        success: true,
        message: 'Eğitim başarıyla silindi.',
        egitim: deletedEgitim,
      };
    } catch (error) {
      console.log('Hata Delete',error)
      return {
        status: 500,
        message: 'Eğitim silinirken bir hata oluştu.',
        error: error.message,
      };
    }
  });
  