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
  const { id } = event.context.params;
  if (!id) {
    return {
      status: 400,
      message: "E\u011Fitim konu ID gerekli."
    };
  }
  try {
    await prisma.egitimKonu.delete({
      where: { id: parseInt(id) }
    });
    return { message: "E\u011Fitim konusu ba\u015Far\u0131yla silindi." };
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim konusu silinirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
