// api/evrak/delete/[id].js
import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const id = parseInt(event.context.params.id);

    // Silinecek evrakı veritabanından al
    const evrak = await prisma.firmaEvrak.findUnique({
      where: { id },
    });

    if (!evrak) {
      return { status: 404, message: 'Evrak bulunamadı' };
    }

    // Dosyayı sistemden sil
    await fs.unlink(evrak.dosyaYolu);

    // Veritabanından evrak kaydını sil
    await prisma.firmaEvrak.delete({
      where: { id },
    });

    return { status: 200, message: 'Evrak başarıyla silindi' };
  } catch (error) {
    console.error('Hata:', error);
    return { status: 500, message: 'Evrak silinirken bir hata oluştu', error: error.message };
  }
});
