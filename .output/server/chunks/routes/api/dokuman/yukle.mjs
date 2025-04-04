import { d as defineEventHandler, u as useRuntimeConfig } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import { promises } from 'fs';
import { join } from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const yukle = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const uploadDir = config.public.uploadDir;
  const form = formidable({
    uploadDir: join(process.cwd(), `./public${uploadDir}`),
    // Dosya yükleme yolunu dinamik yapıyoruz
    keepExtensions: true,
    multiples: false
  });
  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.req, (err, fields2, files2) => {
        if (err) {
          reject(err);
        }
        resolve({ fields: fields2, files: files2 });
      });
    });
    console.log("Y\xFCklenen dosyalar:", files);
    const file = files.file[0];
    if (!file || !file.filepath) {
      console.error("Dosya y\xFCklenemedi, dosya bilgileri:", file);
      throw new Error("Dosya y\xFCklenemedi. Dosya bulunamad\u0131 veya hatal\u0131.");
    }
    const oldPath = file.filepath || file.path || file.tempFilePath;
    const newFileName = `${Date.now()}_${file.originalFilename}`;
    const newPath = join(process.cwd(), `./public${uploadDir}/${newFileName}`);
    await promises.rename(oldPath, newPath);
    const { calisanId, belgeTur, gecerlilikTarihi } = fields;
    console.log("Gelen Data", fields);
    if (belgeTur[0] === "saglikRaporu") {
      await prisma.saglikRapor.create({
        data: {
          calisanId: parseInt(calisanId[0]),
          raporUrl: `./public${uploadDir}/${newFileName}`,
          gecerlilikTarihi: new Date(gecerlilikTarihi[0]),
          yuklemeTarihi: /* @__PURE__ */ new Date()
        }
      });
    } else if (belgeTur[0] === "sertifika") {
      await prisma.sertifika.create({
        data: {
          calisanId: parseInt(calisanId[0]),
          sertifikaUrl: `./public${uploadDir}/${newFileName}`,
          gecerlilikTarihi: new Date(gecerlilikTarihi[0]),
          yuklemeTarihi: /* @__PURE__ */ new Date()
        }
      });
    }
    return { success: true, message: "Belge ba\u015Far\u0131yla y\xFCklendi" };
  } catch (error) {
    console.error("Hata olu\u015Ftu:", error.message);
    return { status: 500, message: "Belge y\xFCklenirken bir hata olu\u015Ftu", error: error.message };
  }
});

export { yukle as default };
//# sourceMappingURL=yukle.mjs.map
