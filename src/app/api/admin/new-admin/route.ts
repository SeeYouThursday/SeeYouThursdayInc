import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
      const newAdmin = await prisma.admin.create({
        data: {
          email,
          password,
        },
      });
      res.status(201).json(newAdmin);
    } catch (error) {
      console.error('Error creating admin:', error);
      res.status(500).json({ error: 'An error occurred while creating the admin' });
    }
  } else if (req.method === 'GET') {
    try {
      const admins = await prisma.admin.findMany();
      res.status(200).json(admins);
    } catch (error) {
      console.error('Error fetching admins:', error);
      res.status(500).json({ error: 'An error occurred while fetching the admins' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
