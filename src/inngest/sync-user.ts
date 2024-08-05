import { PrismaClient } from '@prisma/client';
import { inngest } from './client'; // Ensure correct import path

export const syncUser = inngest.createFunction(
  { id: 'sync-user-from-clerk' }, // The 'id' is an arbitrary string used to identify the function in the dashboard
  { event: 'clerk/user.created' }, // This is the function's triggering event
  async ({ event }: { event: any }) => {
    const user = event.data; // The event payload's data will be the Clerk User json object
    const { id } = user;

    // Check if email_addresses is defined and is an array
    if (!user.email_addresses || !Array.isArray(user.email_addresses)) {
      console.error('Invalid email_addresses:', user.email_addresses);
      throw new Error('Invalid email_addresses');
    }

    const emailObj = user.email_addresses.find(
      (e: { id: string }) => e.id === user.primary_email_address_id
    );

    if (!emailObj) {
      console.error(
        'Primary email address not found:',
        user.primary_email_address_id
      );
      throw new Error('Primary email address not found');
    }

    const email: string = emailObj.email;

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
      console.log('User synced:', result);
      return result;
    } catch (error: any) {
      console.log('Error syncing user:', error);
      throw error;
    }
  }
);
