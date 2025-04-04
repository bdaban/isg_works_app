import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async (event) => {
  const body = await readBody(event)

  // Firma ekleme işlemi
  const newFirma = await prisma.firma.create({
    data: {
      firmaKodu: parseInt(body.firmaKodu),
      firmaAdi: body.firmaAdi,
      adres: body.adres,
      il: body.il,
      ilce: body.ilce,
      telefon: body.telefon,
      email: body.email,
      yetkili: body.yetkili,
      naceId: body.naceId,
      isgkSicilNo: body.isgkSicilNo,
    }
  })

  return newFirma
}
