import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import { join } from 'path';

const prisma = new PrismaClient();
// const uploadDir = path.join(process.cwd(), 'uploads'); değişti

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const uploadDir = config.public.uploadDir;

  try {
    console.log('API çağrıldı');
    // Form verilerini ayrıştır
    const form = formidable({ 
      multiples: true, 
      uploadDir: join(process.cwd(), `./public${uploadDir}`), // Dosya yükleme yolunu dinamik yapıyoruz, 
      keepExtensions: true });
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.node.req, (err, fields, files) => {

        if (err){
          console.error('Form ayrıştırma hatası:', err);
           reject(err);
        }
        console.log('Form ayrıştırıldı:', { fields, files });
        resolve({ fields, files });
      });
    });

    // Firma ve kategori bilgilerini kontrol et
    const firmaId = parseInt(fields.firmaId);
    const kategoriId = parseInt(fields.kategoriId);
    const evrakTuru = String(fields.evrakTuru).trim();

    if (!firmaId || !kategoriId || !evrakTuru) {
      return { status: 400, message: 'Firma veya kategori bilgisi eksik' };
    }

    const firma = await prisma.firma.findUnique({ where: { id: firmaId } });

    console.log('Firma bilgisi:', firma);
    if (!firma || !firma.firmaKodu) {
      return { status: 400, message: 'Firma bulunamadı veya firma kodu eksik' };
    }

    // Klasör yollarını oluştur
    const firmaDir = path.join(`./public${uploadDir}`, String(firma.firmaKodu) || 'default');
    const kategoriDir = kategoriId === 1
      ? path.join(firmaDir, 'FirmaEvraklari')
      : path.join(firmaDir, 'IsgEvraklari');

      console.log('Firma klasörü:', firmaDir);
      console.log('Kategori klasörü:', kategoriDir);

    await fs.mkdir(kategoriDir, { recursive: true });

    // Dosyaları yükle ve veritabanına kaydet
    const uploadedFiles = [];
    const fileArray = Array.isArray(files.file) ? files.file : [files.file];

    console.log('Yüklenecek dosyalar:', fileArray);

    for (const file of fileArray) {
      if (!file.newFilename || !file.filepath) {
        console.error('Geçersiz dosya bilgisi:', file);
        return { status: 400, message: 'Geçersiz dosya bilgisi' };
      }

      const newFilePath = path.join(kategoriDir, file.newFilename);
      console.log('Yeni dosya yolu:', newFilePath);
      await fs.rename(file.filepath, newFilePath);
      console.log('Dosya taşındı:', newFilePath);
      const evrak = await prisma.firmaEvrak.create({
        data: {
          firmaId,
          kategoriId,
          evrakTuru,
          dosyaYolu:`./public/${newFilePath}` ,
          dosyaAdi: file.newFilename,
        },
      });
      console.log('Veritabanına kaydedilen evrak:', evrak);
      uploadedFiles.push(evrak);
    }

    return { status: 200, message: 'Evraklar başarıyla yüklendi', evraklar: uploadedFiles };
  } catch (error) {
    console.error('Hata:', error);
    return { status: 500, message: 'Bir hata oluştu', error: error.message };
  }
});
