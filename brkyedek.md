import { PrismaClient } from "@prisma/client";
import formidable from 'formidable';
import { promises as fs } from 'fs';


const prisma = new PrismaClient();

// formidable formunu tanımlıyoruz
const form = formidable({
  uploadDir: './public/uploads', // Dosyanın yükleneceği klasör
  keepExtensions: true, // Uzantıyı korumak için
  multiples: false // Tek dosya kabul ediyoruz
});

export default defineEventHandler(async (event) => {
  try {
    // Formun parse edilmesi
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.req, (err, fields, files) => {
        if (err) {
          reject(err);
        }
        resolve({ fields, files });
      });
    });

    console.log('Yüklenen dosyalar:', files); // Dosya bilgilerini kontrol etme

    // Dosya kontrolü
    const file = files.file[0];  // files'ın içinde file varsa onu alıyoruz.
    if (!file || !file.filepath) {
      console.error('Dosya yüklenemedi, dosya bilgileri:', file);
      throw new Error('Dosya yüklenemedi. Dosya bulunamadı veya hatalı.');
    }

    // Dosya adı ve yolunu oluşturma
    const oldPath = file.filepath || file.path || file.tempFilePath; // Alternatif yolları kontrol et
    const newFileName = `${Date.now()}_${file.originalFilename}`;
    const newPath = `./public/uploads/${newFileName}`;

    // Dosyanın taşınması
    await fs.rename(oldPath, newPath);

 // Sağlık raporu veya sertifika ekleme
const { calisanId, belgeTur, gecerlilikTarihi } = fields;

// Değerlerin array olarak geldiğini gördüğümüz için, array'in ilk elemanını alıyoruz
console.log('Gelen Data', fields);

if (belgeTur[0] === 'saglikRaporu') {
  await prisma.saglikRapor.create({
    data: {
      calisanId: parseInt(calisanId[0]),  // Array'in ilk elemanını alıyoruz
      raporUrl: `/uploads/${newFileName}`,
      gecerlilikTarihi: new Date(gecerlilikTarihi[0]),  // Array'in ilk elemanını alıyoruz
      yuklemeTarihi: new Date(),  // Date.now() ile şimdiki zamanı alıyoruz
    },
  });
} else if (belgeTur[0] === 'sertifika') {
  await prisma.sertifika.create({
    data: {
      calisanId: parseInt(calisanId[0]),  // Array'in ilk elemanını alıyoruz
      sertifikaUrl: `/uploads/${newFileName}`,
      gecerlilikTarihi: new Date(gecerlilikTarihi[0]),  // Array'in ilk elemanını alıyoruz
      yuklemeTarihi: new Date(),  // Date.now() ile şimdiki zamanı alıyoruz
    },
  });
}

    return { success: true, message: 'Belge başarıyla yüklendi' };
  } catch (error) {
    console.error('Hata oluştu:', error.message);
    return { status: 500, message: 'Belge yüklenirken bir hata oluştu', error: error.message };
  }
});
