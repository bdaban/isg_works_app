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
  try {
    const egitimler = await prisma.egitim.findMany({
      include: {
        calisan: {
          include: {
            firma: true,
            yerleske: true
          }
        },
        egitimKonu: {
          include: {
            kategori: true
          }
        }
      }
    });
    return egitimler;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitimler listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { get as default };
//# sourceMappingURL=get.mjs.map
