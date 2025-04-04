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
  const id = event.context.params.id;
  const updatedYerleske = await prisma.yerleske.update({
    where: { id: parseInt(id) },
    data: {
      subeAdi: body.subeAdi,
      adres: body.adres,
      tehlikeSinifi: body.tehlikeSinifi,
      naceKodu: body.naceKodu,
      telefon: body.telefon,
      yetkili: body.yetkili,
      sgkSicilNo: body.sgkSicilNo
    }
  });
  return updatedYerleske;
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
