import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';
import { error } from 'console';
import { stat } from 'fs';

const prisma = new PrismaClient();

export default async function handler(req: NextRequest, res: NextResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json ({error}, { status: 401 });
  }

  if (req.method === 'POST') {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error }, {status: 400});
    }

    try {
      const newAdmin = await prisma.admin.create({
        data: {
          email,
          password,
        },
      });
      NextResponse.json(newAdmin);
    } catch (error) {
      console.error('Error creating admin:', error);
      NextResponse.json({ error }, {status: 500 });
    }
  } else if (req.method === 'GET') {
    try {
      const admins = await prisma.admin.findMany();
      NextResponse.json(admins);
    } catch (error) {
      console.error('Error fetching admins:', error);
      NextResponse.json({ error } , {status: 500});
    } finally {
    prisma.$disconnect();
  }
}
}
