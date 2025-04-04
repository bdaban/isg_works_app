import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const  id  = event.context.params.id

  const updatedFirma = await prisma.firma.update({
    where: { id: parseInt(id) },
    data: {
      firmaKodu: body.firmaKodu,
      firmaAdi: body.firmaAdi,
      adres: body.adres,
      il: body.il,
      ilce: body.ilce,
      telefon: body.telefon,
      email: body.email,
      yetkili: body.yetkili,
      naceId: body.naceId,
      isgkSicilNo: body.isgkSicilNo,
    },
  })

  return updatedFirma
})
