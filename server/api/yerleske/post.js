import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
const body = await readBody(event);

const newyerleske= await prisma.yerleske.create({
    data:{
        firmaId:parseInt(body.firmaId),
        subeAdi:body.subeAdi,
        adres:body.adres,
        naceId:body.naceKodID,
        telefon:body.telefon,
        yetkili:body.yetkili,
        sgkSicilNo:body.sgkSicilNo

    }
});

return newyerleske;



})