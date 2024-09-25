import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const {
      title,
      shortTitle,
      href,
      description,
      shortDescrip,
      // img_url,
      // icon_url,
      stack,
    } = body;

    const client = await prisma.product.create({
      data: {
        title,
        shortTitle,
        href,
        description,
        shortDescrip,
        // img_url,
        // icon_url,
        stack,
      },
    });

    const cookieStore = cookies();
    const clients = await prisma.product.findMany();
    cookieStore.set('clients', JSON.stringify(clients));

    return NextResponse.json(client);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
