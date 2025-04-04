import { d as defineEventHandler, u as useRuntimeConfig } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const upload = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const uploadDir = config.public.uploadDir;
  try {
    console.log("API \xE7a\u011Fr\u0131ld\u0131");
    const form = formidable({
      multiples: true,
      uploadDir: path.join(process.cwd(), `./public${uploadDir}`),
      keepExtensions: true
    });
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.node.req, (err, fields2, files2) => {
        if (err) {
          console.error("Form ayr\u0131\u015Ft\u0131rma hatas\u0131:", err);
          reject(err);
        }
        console.log("Form ayr\u0131\u015Ft\u0131r\u0131ld\u0131:", { fields: fields2, files: files2 });
        resolve({ fields: fields2, files: files2 });
      });
    });
    const firmaId = parseInt(fields.firmaId);
    const kategoriId = parseInt(fields.kategoriId);
    const evrakTuru = String(fields.evrakTuru).trim();
    if (!firmaId || !kategoriId || !evrakTuru) {
      return { status: 400, message: "Firma veya kategori bilgisi eksik" };
    }
    const firma = await prisma.firma.findUnique({ where: { id: firmaId } });
    console.log("Firma bilgisi:", firma);
    if (!firma || !firma.firmaKodu) {
      return { status: 400, message: "Firma bulunamad\u0131 veya firma kodu eksik" };
    }
    const firmaDir = path.join(uploadDir, String(firma.firmaKodu) || "default");
    const kategoriDir = kategoriId === 1 ? path.join(firmaDir, "FirmaEvraklari") : path.join(firmaDir, "IsgEvraklari");
    console.log("Firma klas\xF6r\xFC:", firmaDir);
    console.log("Kategori klas\xF6r\xFC:", kategoriDir);
    await fs.mkdir(path.join(process.cwd(), `./public${kategoriDir}`), { recursive: true });
    const uploadedFiles = [];
    const fileArray = Array.isArray(files.file) ? files.file : [files.file];
    console.log("Y\xFCklenecek dosyalar:", fileArray);
    for (const file of fileArray) {
      if (!file.newFilename || !file.filepath) {
        console.error("Ge\xE7ersiz dosya bilgisi:", file);
        return { status: 400, message: "Ge\xE7ersiz dosya bilgisi" };
      }
      const newFilePath = path.join(kategoriDir, file.newFilename);
      const fullFilePath = path.join(process.cwd(), `./public${newFilePath}`);
      console.log("Yeni dosya yolu:", fullFilePath);
      await fs.rename(file.filepath, fullFilePath);
      console.log("Dosya ta\u015F\u0131nd\u0131:", fullFilePath);
      const evrak = await prisma.firmaEvrak.create({
        data: {
          firmaId,
          kategoriId,
          evrakTuru,
          dosyaYolu: `./public${newFilePath}`,
          // Sadece `public` altındaki dosya yolunu kaydediyoruz
          dosyaAdi: file.newFilename
        }
      });
      console.log("Veritaban\u0131na kaydedilen evrak:", evrak);
      uploadedFiles.push(evrak);
    }
    return { status: 200, message: "Evraklar ba\u015Far\u0131yla y\xFCklendi", evraklar: uploadedFiles };
  } catch (error) {
    console.error("Hata:", error);
    return { status: 500, message: "Bir hata olu\u015Ftu", error: error.message };
  }
});

export { upload as default };
//# sourceMappingURL=upload.mjs.map
