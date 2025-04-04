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
  const calisan = await prisma.Calisan.create({
    data: {
      firmaId: parseInt(body.firmaId),
      firmaYerleskeId: parseInt(body.firmaYerleskeId),
      aktif: body.aktif,
      adi: body.adi,
      isegiristarihi: new Date(body.isegiristarihi),
      meslegi: body.meslegi,
      soyadi: body.soyadi,
      tc_no: body.tc_no
    }
  });
  return calisan;
});

export { post as default };
//# sourceMappingURL=post.mjs.map
