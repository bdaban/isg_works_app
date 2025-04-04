import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const _id__put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.id || !body.baslik || !body.kategoriId) {
    return {
      status: 400,
      message: "ID, ba\u015Fl\u0131k ve kategori ID gereklidir."
    };
  }
  try {
    const guncellenenEgitimKonu = await prisma.egitimKonu.update({
      where: { id: body.id },
      data: {
        baslik: body.baslik,
        aciklama: body.aciklama,
        kategoriId: body.kategoriId
      }
    });
    return guncellenenEgitimKonu;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim konusu g\xFCncellenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
