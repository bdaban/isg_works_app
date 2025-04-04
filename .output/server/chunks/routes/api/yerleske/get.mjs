import { d as defineEventHandler } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const get = defineEventHandler(async (event) => {
  const yerleskeler = await prisma.yerleske.findMany({
    select: {
      id: true,
      subeAdi: true,
      adres: true,
      telefon: true,
      yetkili: true,
      sgkSicilNo: true,
      firma: {
        select: {
          firmaAdi: true,
          // Sadece firmaAdi alanını alıyoruz
          id: true
        }
      },
      nace: {
        select: {
          kod: true,
          tehlikeSinifi: true
        }
      }
    }
  });
  return yerleskeler;
});

export { get as default };
//# sourceMappingURL=get.mjs.map
