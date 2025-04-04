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
const naceSearch = defineEventHandler(async (event) => {
  const { sgkSicilNo } = await readBody(event);
  if (!sgkSicilNo || sgkSicilNo.length < 4) {
    return { error: "SGK Sicil No en az 4 karakter olmal\u0131d\u0131r" };
  }
  const searchCode = sgkSicilNo.slice(1, 5);
  console.log("serach", searchCode);
  const results = await prisma.nace.findMany({
    where: {
      kod: {
        startsWith: searchCode
        // 2. ve 4. basamağı içeren kodları getir
      }
    }
  });
  return results;
});

export { naceSearch as default };
//# sourceMappingURL=nace-search.mjs.map
