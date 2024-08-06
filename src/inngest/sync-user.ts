import { inngest } from '@/inngest/client';
import { PrismaClient, Prisma } from '@prisma/client';

export const syncUser = inngest.createFunction(
  { id: 'see-you-thursday-inc-sync-user-from-clerk' }, // ←The 'id' is an arbitrary string used to identify the function in the dashboard
  { event: 'clerk/user.created' }, // ← This is the function's triggering event
  async ({ event }: { event: any }) => {
    console.log('Received event:', JSON.stringify(event, null, 2)); // Log the received event
    const user = event.data; // The event payload's data will be the Clerk User json object
    const { id } = user;
    const email: string = user.email_addresses.find(
      (e: { id: string }) => e.id === user.primary_email_address_id
    ).email_address;

    const prisma = new PrismaClient();
    const clerk_id = id;

    try {
      console.log(
        'Creating user in database with clerk_id:',
        clerk_id,
        'and email:',
        email
      ); // Log the data being inserted
      const result = await prisma.admin.create({
        data: {
          clerk_id,
          email,
        },
      });
      console.log('User synced successfully:', result);
    } catch (error: any) {
      console.error('Error syncing user:', error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error('Prisma Client Known Request Error:', error.message);
      } else if (error instanceof Prisma.PrismaClientValidationError) {
        console.error('Prisma Client Validation Error:', error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
      throw new Error('Failed to sync user');
    } finally {
      await prisma.$disconnect();
    }
  }
);
