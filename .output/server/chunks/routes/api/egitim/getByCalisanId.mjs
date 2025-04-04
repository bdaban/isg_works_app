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
const getByCalisanId = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const calisanId = query.calisanId ? parseInt(query.calisanId) : null;
  if (!calisanId) {
    return {
      status: 400,
      message: "\xC7al\u0131\u015Fan ID gerekli."
    };
  }
  try {
    const egitimler = await prisma.egitim.findMany({
      where: { calisanId },
      include: {
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

export { getByCalisanId as default };
//# sourceMappingURL=getByCalisanId.mjs.map
