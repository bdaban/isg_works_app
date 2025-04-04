import fs from 'fs';


export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const evrakId = parseInt(query.evrakId);

  const evrak = await prisma.firmaEvrak.findUnique({ where: { id: evrakId } });

  if (!evrak) {
    return { status: 404, message: 'Evrak bulunamadı' };
  }

  const filePath = evrak.dosyaYolu;
  if (!fs.existsSync(filePath)) {
    return { status: 404, message: 'Dosya bulunamadı' };
  }

  return sendStream(event, fs.createReadStream(filePath));
});
