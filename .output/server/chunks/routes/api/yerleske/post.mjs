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
  const newyerleske = await prisma.yerleske.create({
    data: {
      firmaId: parseInt(body.firmaId),
      subeAdi: body.subeAdi,
      adres: body.adres,
      naceId: body.naceKodID,
      telefon: body.telefon,
      yetkili: body.yetkili,
      sgkSicilNo: body.sgkSicilNo
    }
  });
  return newyerleske;
});

export { post as default };
//# sourceMappingURL=post.mjs.map
