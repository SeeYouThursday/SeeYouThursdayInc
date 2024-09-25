import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

// Singleton pattern for PrismaClient
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const getCookies = cookieStore.get('clients');
    const clientCookies = getCookies ? JSON.parse(getCookies.value) : [];

    // If cookies are present and valid, return them without querying the database
    if (getCookies) {
      const clientCount = await prisma.product.count();
      if (clientCookies.length === clientCount) {
        return NextResponse.json(clientCookies);
      }
    }

    // If cookies are not present or invalid, query the database and update cookies
    const clients = await prisma.product.findMany();
    cookieStore.set('clients', JSON.stringify(clients));
    return NextResponse.json(clients);
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
