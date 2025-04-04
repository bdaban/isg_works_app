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
const getByYerleskeId = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const yerleskeId = query.yerleskeId ? parseInt(query.yerleskeId) : null;
  if (!yerleskeId) {
    return {
      status: 400,
      message: "Yerle\u015Fke ID gerekli."
    };
  }
  try {
    const calisanlar = await prisma.calisan.findMany({
      where: { firmaYerleskeId: yerleskeId },
      include: {
        firma: true,
        yerleske: true
      }
    });
    return calisanlar;
  } catch (error) {
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fanlar listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { getByYerleskeId as default };
//# sourceMappingURL=getByYerleskeId.mjs.map
