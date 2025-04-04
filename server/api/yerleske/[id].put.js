import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const  id  = event.context.params.id

  const updatedYerleske = await prisma.yerleske.update({
    where: { id: parseInt(id) },
    data: {
        
        subeAdi:body.subeAdi,
        adres:body.adres,
        tehlikeSinifi:body.tehlikeSinifi,
        naceKodu:body.naceKodu,
        telefon:body.telefon,
        yetkili:body.yetkili,
        sgkSicilNo:body.sgkSicilNo
    },
  })

  return updatedYerleske
})