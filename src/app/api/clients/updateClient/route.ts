import { PrismaClient, Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function PUT(req: NextRequest) {
  const prisma = new PrismaClient();

  try {
    const body = await req.json();
    console.log('Request body:', body); // Add logging to inspect the request body

    if (!body || !body.id) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { id, ...updateData } = body;

    const dataToUpdate: { [key: string]: any } = {};
    for (const key in updateData) {
      if (updateData.hasOwnProperty(key)) {
        dataToUpdate[key] = updateData[key];
      }
    }

    const client = await prisma.product.update({
      where: { id: Number(id) },
      data: dataToUpdate,
    });

    // upon updating, update the cookies entry for updated client
    // Invalidate cache
    const cookieStore = cookies();
    const clients = await prisma.product.findMany();
    cookieStore.set('clients', JSON.stringify(clients));

    return NextResponse.json(client);
  } catch (error) {
    console.error(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle known request errors
      if (error.code === 'P2025') {
        // Record to update not found
        return NextResponse.json(
          { error: 'Client not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ error }, { status: 500 });
    }
  }
}
