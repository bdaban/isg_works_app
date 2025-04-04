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
    const updatedCalisan = await prisma.calisan.update({
      where: { id: parseInt(id) },
      data: {
        adi: body.adi,
        soyadi: body.soyadi,
        tc_no: body.tc_no,
        meslegi: body.meslegi,
        isegiristarihi: new Date(body.isegiristarihi),
        isecikistaarihi: body.isecikistaarihi ? new Date(body.isecikistaarihi) : null,
        aktif: body.aktif
      }
    });
    return {
      success: true,
      message: "\xC7al\u0131\u015Fan ba\u015Far\u0131yla g\xFCncellendi",
      calisan: updatedCalisan
    };
  } catch (error) {
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fan g\xFCncellenirken bir hata olu\u015Ftu",
      error: error.message
    };
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
