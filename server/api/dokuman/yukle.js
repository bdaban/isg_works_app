import { PrismaClient } from "@prisma/client";
import formidable from 'formidable';
import { promises as fs } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const uploadDir = config.public.uploadDir;

  // formidable formunu tanımlıyoruz
  const form = formidable({
    uploadDir: join(process.cwd(), `./public${uploadDir}`), // Dosya yükleme yolunu dinamik yapıyoruz
    keepExtensions: true,
    multiples: false
  });

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

    console.log('Yüklenen dosyalar:', files);

    // Dosya kontrolü
    const file = files.file[0];
    if (!file || !file.filepath) {
      console.error('Dosya yüklenemedi, dosya bilgileri:', file);
      throw new Error('Dosya yüklenemedi. Dosya bulunamadı veya hatalı.');
    }

    // Dosya adı ve yolunu oluşturma
    const oldPath = file.filepath || file.path || file.tempFilePath;
    const newFileName = `${Date.now()}_${file.originalFilename}`;
    const newPath = join(process.cwd(), `./public${uploadDir}/${newFileName}`);

    // Dosyanın taşınması
    await fs.rename(oldPath, newPath);

    // Sağlık raporu veya sertifika ekleme
    const { calisanId, belgeTur, gecerlilikTarihi } = fields;
    console.log('Gelen Data', fields);

    if (belgeTur[0] === 'saglikRaporu') {
      await prisma.saglikRapor.create({
        data: {
          calisanId: parseInt(calisanId[0]),
          raporUrl: `./public${uploadDir}/${newFileName}`,
          gecerlilikTarihi: new Date(gecerlilikTarihi[0]),
          yuklemeTarihi: new Date(),
        },
      });
    } else if (belgeTur[0] === 'sertifika') {
      await prisma.sertifika.create({
        data: {
          calisanId: parseInt(calisanId[0]),
          sertifikaUrl: `./public${uploadDir}/${newFileName}`,
          gecerlilikTarihi: new Date(gecerlilikTarihi[0]),
          yuklemeTarihi: new Date(),
        },
      });
    }

    return { success: true, message: 'Belge başarıyla yüklendi' };
  } catch (error) {
    console.error('Hata oluştu:', error.message);
    return { status: 500, message: 'Belge yüklenirken bir hata oluştu', error: error.message };
  }
});
