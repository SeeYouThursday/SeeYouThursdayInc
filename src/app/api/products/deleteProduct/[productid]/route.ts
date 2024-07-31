import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const productId = req.nextUrl.searchParams.get('productid');

  if (!productId) {
    return NextResponse.json({ Error }, { status: 400 });
  }

  try {
    const product = await prisma.product.delete({
      where: { id: Number(productId) },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}