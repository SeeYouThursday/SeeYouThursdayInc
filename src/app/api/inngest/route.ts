import { serve } from 'inngest/next';
import { inngest } from '@/inngest/client';
import { syncUser } from '@/inngest/sync-user';

// Create an API that serves zero functions
export default serve({
  client: inngest,
  functions: [
    syncUser, // <-- This is where you'll always add all your functions
  ],
});
