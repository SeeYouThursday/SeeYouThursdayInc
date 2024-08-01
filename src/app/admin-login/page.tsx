import { SignInButton } from '@clerk/nextjs';
import AdminSignUp from '@/components/AdminSignUp';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section className="h-[60svh] bg-[url('/contact/purple-bg.webp')] flex justify-center items-center">
      <AdminSignUp />
      <div className="text-blue-900 rounded-btn bg-violet-200 p-3 hover:scale-105">
        <Suspense>
          <SignInButton mode="modal">
            <button className="text-blue-900 rounded-btn bg-violet-200 p-3 hover:scale-105">
              Sign in with Clerk
            </button>
          </SignInButton>
        </Suspense>
      </div>
    </section>
  );
}
