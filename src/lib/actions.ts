import { PrismaClient } from '@prisma/client';

export const getAllProducts = async () => {
  const prisma = new PrismaClient();

  try {
    const getAll = await prisma.product.findMany({});
    return getAll;
  } catch (err) {
    throw new Error('error getting projects');
  } finally {
    prisma.$disconnect();
  }
};
