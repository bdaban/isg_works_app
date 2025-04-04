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
const _id__delete = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    const deletedCalisan = await prisma.calisan.delete({
      where: { id: parseInt(id) }
      // ID'yi parse et
    });
    return {
      success: true,
      message: "\xC7al\u0131\u015Fan ba\u015Far\u0131yla silindi",
      calisan: deletedCalisan
    };
  } catch (error) {
    console.error("\xC7al\u0131\u015Fan silinirken hata olu\u015Ftu:", error);
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fan silinirken bir hata olu\u015Ftu",
      error: error.message
    };
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
