import { d as defineEventHandler } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const getGroupedByKategori = defineEventHandler(async () => {
  try {
    const kategoriler = await prisma.kategori.findMany({
      include: {
        egitimKonular: {
          include: {
            egitimler: {
              include: {
                calisan: true
                // Eğitim alan çalışan bilgisi
              }
            }
          }
        }
      }
    });
    return {
      status: 200,
      data: kategoriler
    };
  } catch (error) {
    return {
      status: 500,
      message: "Kategorilere g\xF6re e\u011Fitimler getirilirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { getGroupedByKategori as default };
//# sourceMappingURL=getGroupedByKategori.mjs.map
