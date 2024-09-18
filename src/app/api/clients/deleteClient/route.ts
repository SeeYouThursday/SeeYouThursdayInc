import { PrismaClient, Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { del } from '@vercel/blob';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { id } = body;
  console.log(id);

  if (!id) {
    return NextResponse.json(
      { error: 'Client ID is required' },
      { status: 400 }
    );
  }

  try {
    const client = await prisma.product.delete({
      where: { id: Number(id) },
    });

    //Deleting icons/imgs from Blob storage
    const iconToDelete: string = client.icon_url ?? '';
    const imgToDelete: string = client.img_url ?? '';

    const imgsToDelete = [];

    if (iconToDelete) imgsToDelete.push(iconToDelete);
    if (imgToDelete) imgsToDelete.push(imgToDelete);

    await del(imgsToDelete);

    // Invalidate cache
    const cookieStore = cookies();
    const clients = await prisma.product.findMany();
    cookieStore.set('clients', JSON.stringify(clients));
    return NextResponse.json(client, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        // Record to delete does not exist
        return NextResponse.json(
          { error: 'Client not found' },
          { status: 404 }
        );
      }
    }
    console.error('Error deleting client:', error);
    return NextResponse.json(
      { error: 'Failed to delete client' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
