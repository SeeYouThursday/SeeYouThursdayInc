import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

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

    const product = await prisma.product.create({
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

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
