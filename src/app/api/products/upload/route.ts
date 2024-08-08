// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { put } from '@vercel/blob';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const formData = req.body;
    const imageFile = formData.img as File;
    const iconFile = formData.icon as File;

    try {
      const imgBlob = await put(imageFile.name, imageFile, {
        access: 'public',
      });
      const iconBlob = await put(iconFile.name, iconFile, { access: 'public' });

      const client = formData.client?.toString();
      const id = client ? parseInt(client) : 0;

      if (!client) {
        return res.status(400).json({ error: 'Client not specified' });
      }

      const update = await prisma.product.update({
        where: { id: id },
        data: {
          img_url: imgBlob.toString(),
          icon_url: iconBlob.toString(),
        },
      });

      return res.status(200).json(update);
    } catch (error) {
      console.log('error uploading', error);
      return res.status(500).json({ error: 'Error uploading files' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
