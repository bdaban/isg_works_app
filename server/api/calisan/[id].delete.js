import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params.id; // URL'den id al

  try {
    // Çalışanı sil
    const deletedCalisan = await prisma.calisan.delete({
      where: { id: parseInt(id) }, // ID'yi parse et
    });

    return {
      success: true,
      message: 'Çalışan başarıyla silindi',
      calisan: deletedCalisan,
    };
  } catch (error) {
    console.error('Çalışan silinirken hata oluştu:', error);
    return {
      status: 500,
      message: 'Çalışan silinirken bir hata oluştu',
      error: error.message,
    };
  }
});
