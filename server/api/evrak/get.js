import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const evraklar = await prisma.firmaEvrak.findMany({
        include: {
        firma: true,
        kategori:true
      },
    });
  
    return evraklar;
  });
  