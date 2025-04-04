import { r as readBody } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const post = async (event) => {
  const body = await readBody(event);
  const newFirma = await prisma.firma.create({
    data: {
      firmaKodu: parseInt(body.firmaKodu),
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
  return newFirma;
};

export { post as default };
//# sourceMappingURL=post.mjs.map
