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
const excel = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newCalisan = await prisma.calisan.create({
      data: {
        adi: body.adi,
        soyadi: body.soyadi,
        tc_no: String(body.tc_no),
        // TC numarasını string olarak kullan
        meslegi: body.meslegi,
        firmaId: body.firmaId,
        firmaYerleskeId: body.firmaYerleskeId,
        isegiristarihi: new Date(body.isegiristarihi),
        isecikistaarihi: body.isecikistaarihi ? new Date(body.isecikistaarihi) : null,
        aktif: body.aktif
      }
    });
    return {
      success: true,
      message: "\xC7al\u0131\u015Fan ba\u015Far\u0131yla eklendi",
      calisan: newCalisan
    };
  } catch (error) {
    console.error("Hata olu\u015Ftu:", error);
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fan eklenirken bir hata olu\u015Ftu",
      error: error.message
    };
  }
});

export { excel as default };
//# sourceMappingURL=excel.mjs.map
