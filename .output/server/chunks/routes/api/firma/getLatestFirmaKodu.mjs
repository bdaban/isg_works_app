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
const getLatestFirmaKodu = defineEventHandler(async () => {
  try {
    const latestFirma = await prisma.firma.findFirst({
      orderBy: {
        firmaKodu: "desc"
        // En yüksek firma kodunu getir
      }
    });
    const nextFirmaKodu = latestFirma ? parseInt(latestFirma.firmaKodu) + 1 : 1;
    return { success: true, nextFirmaKodu };
  } catch (error) {
    console.error("Hata:", error);
    return { success: false, message: "Firma kodu al\u0131n\u0131rken bir hata olu\u015Ftu." };
  }
});

export { getLatestFirmaKodu as default };
//# sourceMappingURL=getLatestFirmaKodu.mjs.map
