import { d as defineEventHandler, g as getQuery } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const getByFirmaId = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const firmaId = query.firmaId ? parseInt(query.firmaId) : null;
  if (!firmaId) {
    return {
      status: 400,
      message: "Firma ID gerekli."
    };
  }
  try {
    const egitimler = await prisma.egitim.findMany({
      where: { calisan: { firmaId } },
      include: {
        calisan: {
          include: {
            firma: true,
            yerleske: true
          }
        },
        egitimKonu: true
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

export { getByFirmaId as default };
//# sourceMappingURL=getByFirmaId.mjs.map
