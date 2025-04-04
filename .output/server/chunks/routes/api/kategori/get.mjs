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
const get = defineEventHandler(async (event) => {
  try {
    const kategoriler = await prisma.kategori.findMany({
      include: {
        egitimKonular: true
        // İlgili eğitim konularını dahil et
      }
    });
    return kategoriler;
  } catch (error) {
    return {
      status: 500,
      message: "Kategoriler listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { get as default };
//# sourceMappingURL=get.mjs.map
