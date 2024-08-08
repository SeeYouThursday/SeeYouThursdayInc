'use server';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

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

export async function handleFormSubmission(formData: FormData) {
  const prisma = new PrismaClient();

  const imageFile = formData.get('img') as File;
  const iconFile = formData.get('icon') as File;
  const client = formData.get('client')?.toString();
  const id = client ? parseInt(client) : 0;

  if (!client) {
    throw new Error('Client not specified');
  }

  try {
    // handling uploads for Vercel Blob
    const imgBlob = await put(imageFile.name, imageFile, {
      access: 'public',
    });
    const iconBlob = await put(iconFile.name, iconFile, { access: 'public' });
    // update img_url and icon_url on Product
    const update = await prisma.product.update({
      where: { id: id },
      data: {
        img_url: imgBlob.url.toString(),
        icon_url: iconBlob.url.toString(),
      },
    });

    revalidatePath('/dashboard');
    return update;
  } catch (error) {
    console.error('Error uploading files:', error);
    throw new Error('Error uploading files');
  } finally {
    prisma.$disconnect();
    redirect('/dashboard');
  }
}
