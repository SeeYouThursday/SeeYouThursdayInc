import { serve } from 'inngest/next';
import { inngest } from '@/inngest/client';
import { syncUser } from '@/inngest/sync-user';
import { NextRequest, NextResponse } from 'next/server';
let handlers;

try {
  // Create an API that serves zero functions
  handlers = serve({
    client: inngest,
    functions: [
      syncUser, // <-- This is where you'll always add all your functions
    ],
  });
} catch (error: any) {
  console.error('Error initializing API handlers:', error);
  handlers = {
    GET: async (req: NextRequest, res: NextResponse) => {
      return NextResponse.json({ error: error.message });
    },
    PUT: async (req: NextRequest, res: NextResponse) => {
      return NextResponse.json({ error: error.message });
    },
    POST: async (req: NextRequest, res: NextResponse) => {
      return NextResponse.json({ error: error.message });
    },
  };
}

export const { GET, PUT, POST } = handlers;
