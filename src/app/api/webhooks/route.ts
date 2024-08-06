import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();
  const WEBHOOK_SECRET = process.env.NEXT_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error('WEBHOOK_SECRET is not set');
    return new Response('Internal Server Error', { status: 500 });
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error('Missing svix headers');
    return new Response('Bad Request', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Bad Request', { status: 400 });
  }

  if ('id' in evt.data && 'email_addresses' in evt.data) {
    const { id, email_addresses } = evt.data as {
      id: string;
      email_addresses: { email_address: string }[];
    };
    const clerk_id: string = id;
    const email = email_addresses[0].email_address;

    try {
      const result = await prisma.admin.create({
        data: {
          clerk_id,
          email,
        },
      });
      return NextResponse.json({ result }, { status: 200 });
    } catch (error: any) {
      console.error('Error creating admin:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    console.error('Invalid event data');
    return new Response('Bad Request', { status: 400 });
  }
}
