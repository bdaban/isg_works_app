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
    const deletedEgitim = await prisma.egitim.delete({
      where: { id: parseInt(id) }
    });
    return {
      success: true,
      message: "E\u011Fitim ba\u015Far\u0131yla silindi.",
      egitim: deletedEgitim
    };
  } catch (error) {
    console.log("Hata Delete", error);
    return {
      status: 500,
      message: "E\u011Fitim silinirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
