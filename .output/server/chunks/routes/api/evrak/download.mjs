import { d as defineEventHandler, g as getQuery, s as sendStream } from '../../../runtime.mjs';
import fs from 'fs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const download = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const evrakId = parseInt(query.evrakId);
  const evrak = await prisma.firmaEvrak.findUnique({ where: { id: evrakId } });
  if (!evrak) {
    return { status: 404, message: "Evrak bulunamad\u0131" };
  }
  const filePath = evrak.dosyaYolu;
  if (!fs.existsSync(filePath)) {
    return { status: 404, message: "Dosya bulunamad\u0131" };
  }
  return sendStream(event, fs.createReadStream(filePath));
});

export { download as default };
//# sourceMappingURL=download.mjs.map
