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
const _id__delete = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = body;
  try {
    await prisma.firma.delete({
      where: {
        id: parseInt(id)
      }
    });
    return {
      status: 200,
      message: "Firma Silindi"
    };
  } catch (error) {
    console.error("Failed to delete firma:", error);
    return {
      status: 500,
      message: "Failed to delete firma",
      error
    };
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
