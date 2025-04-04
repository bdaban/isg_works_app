import { d as defineEventHandler, g as getQuery } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const getByKategoriId = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const kategoriId = query.kategoriId ? parseInt(query.kategoriId) : null;
  if (!kategoriId) {
    return { status: 400, message: "Kategori ID gerekli." };
  }
  try {
    const egitimKonular = await prisma.egitimKonu.findMany({
      where: { kategoriId }
    });
    return egitimKonular;
  } catch (error) {
    return { status: 500, message: "E\u011Fitim konular\u0131 getirilirken bir hata olu\u015Ftu.", error: error.message };
  }
});

export { getByKategoriId as default };
//# sourceMappingURL=getByKategoriId.mjs.map
