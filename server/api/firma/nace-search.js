import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { sgkSicilNo } = await readBody(event);
 
  if (!sgkSicilNo || sgkSicilNo.length < 4) {
    return { error: "SGK Sicil No en az 4 karakter olmalıdır" };
  }
  // SGK Sicil No'nun 2. ve 4. basamağını al
  const searchCode = sgkSicilNo.slice(1, 5);
  console.log('serach',searchCode)

  // NACE kodunda ara
  const results = await prisma.nace.findMany({
    where: {
      kod: {
        startsWith: searchCode, // 2. ve 4. basamağı içeren kodları getir
      },
    },
  });

  return results;
});
