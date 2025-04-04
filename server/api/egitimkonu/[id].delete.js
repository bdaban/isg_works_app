import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // URL'den dinamik 'id' parametresini alıyoruz
  const { id } = event.context.params;

  if (!id) {
    return {
      status: 400,
      message: 'Eğitim konu ID gerekli.',
    };
  }

  try {
    // Verilen ID'ye göre eğitim konusunu sil
    await prisma.egitimKonu.delete({
      where: { id: parseInt(id) },
    });
    return { message: 'Eğitim konusu başarıyla silindi.' };
  } catch (error) {
    return {
      status: 500,
      message: 'Eğitim konusu silinirken bir hata oluştu.',
      error: error.message,
    };
  }
});
