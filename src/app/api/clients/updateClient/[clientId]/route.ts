import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const productId = req.nextUrl.searchParams.get('productid');

  if (!productId) {
    return NextResponse.json({ Error }, { status: 400 });
  }

  try {
    const body = await req.json();
    const {
      title,
      shortTitle,
      href,
      description,
      shortDescrip,
      img_url,
      icon_url,
      stack,
    } = body;

    const product = await prisma.product.update({
      where: { id: Number(productId) },
      data: {
        title,
        shortTitle,
        href,
        description,
        shortDescrip,
        img_url,
        icon_url,
        stack,
      },
    });
    
    // upon updating, update the cookies entry for updated client

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
