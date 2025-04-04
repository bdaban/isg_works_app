import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Tüm firmaları getir
    const firmalar = await prisma.firma.findMany({
      include:{
        nace:true,
      }
    })
    return firmalar
  } catch (error) {
    // Eğer bir hata oluşursa, hatayı konsola yazdır
    console.error('Veritabanı bağlantı hatası:', error.message || error)
    
    // İstersen kullanıcıya hata mesajı döndürebilirsin
    return {
      statusCode: 500,
      message: 'Veritabanı bağlantısı sağlanamadı',
    }
  }
})
