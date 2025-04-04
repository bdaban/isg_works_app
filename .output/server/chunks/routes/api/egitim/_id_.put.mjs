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
  const id = event.context.params.id;
  const body = await readBody(event);
  try {
    const updatedEgitim = await prisma.egitim.update({
      where: { id: parseInt(id) },
      data: {
        calisanId: body.calisanId,
        egitimKonuId: body.egitimKonuId,
        egitimTarihi: new Date(body.egitimTarihi),
        gecerlilikTarihi: new Date(body.gecerlilikTarihi),
        sure: body.sure,
        belge: body.belge || null
        // Belge var mı kontrol ediyoruz
      }
    });
    return {
      success: true,
      message: "E\u011Fitim ba\u015Far\u0131yla g\xFCncellendi",
      egitim: updatedEgitim
    };
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim g\xFCncellenirken bir hata olu\u015Ftu",
      error: error.message
    };
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
