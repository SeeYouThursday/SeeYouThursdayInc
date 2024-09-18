import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  secretKey: process.env.NEXT_CLERK_SECRET_KEY,
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for admin CRUD API routes
    '/api/createProduct',
    '/api/getProduct',
    '/api/updateProduct',
    '/api/deleteProduct',
    // Require auth for the /dashboard route
    '/dashboard/:path*',
  ],
};
