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
  const calisanlar = await prisma.calisan.findMany({
    select: {
      id: true,
      firmaId: true,
      aktif: true,
      adi: true,
      firmaYerleskeId: true,
      isegiristarihi: true,
      isecikistaarihi: true,
      meslegi: true,
      soyadi: true,
      tc_no: true,
      firma: {
        select: {
          firmaAdi: true
        }
      },
      yerleske: {
        select: {
          subeAdi: true
        }
      },
      saglikRaporlari: {
        // Sağlık raporu ilişkilendirilmesi
        select: {
          raporUrl: true,
          gecerlilikTarihi: true
        }
      },
      sertifikalar: {
        // Sertifika ilişkilendirilmesi
        select: {
          sertifikaUrl: true,
          gecerlilikTarihi: true
        }
      }
    }
  });
  return calisanlar;
});

export { get as default };
//# sourceMappingURL=get.mjs.map
