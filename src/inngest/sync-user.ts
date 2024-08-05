import { PrismaClient } from '@prisma/client';
import { inngest } from '@/inngest/client';

export const syncUser = inngest.createFunction(
  { id: 'clerk/user.created' }, // ←The 'id' is an arbitrary string used to identify the function in the dashboard
  { event: 'clerk/user.created' }, // ← This is the function's triggering event
  async ({ event }: { event: any }) => {
    const user = event.data; // The event payload's data will be the Clerk User json object
    const { id } = user;
    const email: string = user.email_addresses.find(
      (e: { id: string }) => e.id === user.primary_email_address_id
    ).email;

    console.log('help me');
    const prisma = new PrismaClient();
    const clerk_id = id;

    try {
      const result = await prisma.admin.create({
        data: {
          clerk_id,
          email,
        },
      });
      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);
