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
  const { payloads } = await readBody(event);
  if (!payloads || payloads.length === 0) {
    return {
      status: 400,
      message: "Kaydedilecek veri bulunamad\u0131."
    };
  }
  try {
    await prisma.egitim.createMany({
      data: payloads.map((payload) => ({
        calisanId: payload.calisanId,
        egitimKonuId: payload.egitimKonuId,
        egitimTarihi: new Date(payload.egitimTarihi),
        gecerlilikTarihi: new Date(payload.gecerlilikTarihi),
        sure: parseInt(payload.sure, 10),
        belge: payload.belge || null
      }))
    });
    return {
      status: 200,
      message: "E\u011Fitimler ba\u015Far\u0131yla kaydedildi."
    };
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim kaydedilirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { post as default };
//# sourceMappingURL=post.mjs.map
