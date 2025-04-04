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
  const evraklar = await prisma.firmaEvrak.findMany({
    include: {
      firma: true,
      kategori: true
    }
  });
  return evraklar;
});

export { get as default };
//# sourceMappingURL=get.mjs.map
