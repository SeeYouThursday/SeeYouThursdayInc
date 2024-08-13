'use server';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { PrismaClient, Prisma } from '@prisma/client';
import { redirect } from 'next/navigation';
import { currentUser, auth } from '@clerk/nextjs/server';

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

export async function handleAdminImgSubmit(formData: FormData) {
  const prisma = new PrismaClient();
  // Get Form Data
  const { img } = Object.fromEntries(formData.entries());
  const imageFile = img as File;
  const { userId } = auth();
  const user = await currentUser();
  const email = user?.primaryEmailAddress;
  try {
    // handling uploads for Vercel Blob
    const imgBlob = await put(imageFile.name, imageFile, {
      access: 'public',
    });

    //make sure that auth and user exists
    if (!user || !userId || !email) {
      return new Error('not signed in');
    }

    // update admin img //convert email/clerkId to strings
    const update = await prisma.admin.update({
      where: {
        clerk_id: 'user_2kFMTD8UX1ILYbnNV8qlGdLrEkh',
        email: email.toString(),
      },
      data: {
        img_url: imgBlob.url.toString(),
      },
    });

    revalidatePath('/upload-img');
    return update;
  } catch (error) {
    console.error('Error uploading files:', error);
    throw new Error('Error uploading files');
  } finally {
    prisma.$disconnect();
    redirect('/dashboard');
  }
}

export async function updateAdmin({
  userEmail,
  formData,
}: {
  userEmail: string;
  formData: FormData;
}) {
  const prisma = new PrismaClient();

  try {
    const updated = await prisma.admin.update({
      where: { email: userEmail },
      data: { ...formData },
    });
  } catch (err) {
    throw new Error('Error uploading files');
  }
}

