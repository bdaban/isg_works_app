import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
const body = await readBody(event);

const calisan= await prisma.Calisan.create({
    data:{
        firmaId:parseInt(body.firmaId),
        firmaYerleskeId:parseInt(body.firmaYerleskeId),
        aktif:body.aktif,
        adi:body.adi,
        isegiristarihi:new Date(body.isegiristarihi),
        meslegi:body.meslegi,
        soyadi:body.soyadi,
        tc_no:body.tc_no
        

    }
});

return calisan ;



})