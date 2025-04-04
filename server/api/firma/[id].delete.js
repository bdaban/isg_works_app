import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id } = body

  try {
  
    await prisma.firma.delete({
      where: {
        id: parseInt(id),
      },
    });

    return {
      status: 200,
      message: 'Firma Silindi',
    };
  } catch (error) {
    console.error('Failed to delete firma:', error);
    return {
      status: 500,
      message: 'Failed to delete firma',error
    };
  }
});
