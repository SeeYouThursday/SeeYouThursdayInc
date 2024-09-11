import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient();

  try {
    // Initial load, should check the count of the db versus the cookies
    // If count is less/more than count of cookies, then revalidate and update with new information from DB
    const clientCount = await prisma.product.count();
    const cookieStore = cookies();
    const getCookies = cookieStore.get('clients');
    const clientCookies = getCookies ? JSON.parse(getCookies.value) : [];

    if (!getCookies || clientCookies.length !== clientCount) {
      const clients = await prisma.product.findMany();
      cookieStore.set('clients', JSON.stringify(clients));
      return NextResponse.json(clients);
    }

    return NextResponse.json(clientCookies);
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json(
      { error: 'Error fetching clients' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
