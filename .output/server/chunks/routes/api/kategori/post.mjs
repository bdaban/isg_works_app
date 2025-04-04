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
  if (!body.isim) {
    return {
      status: 400,
      message: "Kategori ad\u0131 gereklidir."
    };
  }
  try {
    const yeniKategori = await prisma.kategori.create({
      data: {
        isim: body.isim
      }
    });
    return yeniKategori;
  } catch (error) {
    return {
      status: 500,
      message: "Kategori eklenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { post as default };
//# sourceMappingURL=post.mjs.map
