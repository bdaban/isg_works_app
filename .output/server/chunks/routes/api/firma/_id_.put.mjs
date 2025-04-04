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
  const updatedFirma = await prisma.firma.update({
    where: { id: parseInt(id) },
    data: {
      firmaKodu: body.firmaKodu,
      firmaAdi: body.firmaAdi,
      adres: body.adres,
      il: body.il,
      ilce: body.ilce,
      telefon: body.telefon,
      email: body.email,
      yetkili: body.yetkili,
      naceId: body.naceId,
      isgkSicilNo: body.isgkSicilNo
    }
  });
  return updatedFirma;
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
