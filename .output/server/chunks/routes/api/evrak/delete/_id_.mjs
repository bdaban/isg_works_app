import { d as defineEventHandler } from '../../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const prisma = new PrismaClient();
const _id_ = defineEventHandler(async (event) => {
  try {
    const id = parseInt(event.context.params.id);
    const evrak = await prisma.firmaEvrak.findUnique({
      where: { id }
    });
    if (!evrak) {
      return { status: 404, message: "Evrak bulunamad\u0131" };
    }
    await fs.unlink(evrak.dosyaYolu);
    await prisma.firmaEvrak.delete({
      where: { id }
    });
    return { status: 200, message: "Evrak ba\u015Far\u0131yla silindi" };
  } catch (error) {
    console.error("Hata:", error);
    return { status: 500, message: "Evrak silinirken bir hata olu\u015Ftu", error: error.message };
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
