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
const post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.baslik || !body.kategoriId) {
    return {
      status: 400,
      message: "Ba\u015Fl\u0131k ve kategori ID gereklidir."
    };
  }
  try {
    const yeniEgitimKonu = await prisma.egitimKonu.create({
      data: {
        baslik: body.baslik,
        aciklama: body.aciklama,
        kategoriId: body.kategoriId
      }
    });
    return yeniEgitimKonu;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim konusu eklenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { post as default };
//# sourceMappingURL=post.mjs.map
