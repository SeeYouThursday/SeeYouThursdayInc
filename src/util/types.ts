

import { PrismaClient } from '@prisma/client';
import { Product } from '@/app/types/product';

const prisma = new PrismaClient();

export type CreateProduct = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProduct = Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>;

async function getAllProducts(): Promise<Product[]> {
  return await prisma.product.findMany();
}

async function createProduct(data: CreateProduct): Promise<Product> {
  return await prisma.product.create({ data });
}

async function updateProduct(id: number, data: UpdateProduct): Promise<Product> {
  return await prisma.product.update({ where: { id }, data });
}

async function deleteProduct(id: number): Promise<Product> {
  return await prisma.product.delete({ where: { id } });
}