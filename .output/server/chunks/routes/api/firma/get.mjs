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
    const firmalar = await prisma.firma.findMany({
      include: {
        nace: true
      }
    });
    return firmalar;
  } catch (error) {
    console.error("Veritaban\u0131 ba\u011Flant\u0131 hatas\u0131:", error.message || error);
    return {
      statusCode: 500,
      message: "Veritaban\u0131 ba\u011Flant\u0131s\u0131 sa\u011Flanamad\u0131"
    };
  }
});

export { get as default };
//# sourceMappingURL=get.mjs.map
