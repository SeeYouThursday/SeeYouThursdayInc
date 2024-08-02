import { serve } from 'inngest/next';
import { inngest } from '@/inngest/client';
import { syncUser } from '@/inngest/sync-user';

// Create an API that serves zero functions
const { POST } = serve({
  client: inngest,
  functions: [
    syncUser, // <-- This is where you'll always add all your functions
  ],
});

export default POST;

// const inngest = new Inngest({ name: 'My App' });
// const fn = inngest.createFunction(
//   { name: 'Welcome email' },
//   { event: 'user.signup' },
//   async ({ event }) => {
//     return await sendEmail(event.data.email, 'welcome');
//   }
// );

// export default serve(inngest, [fn]);
