import { SignInButton } from '@clerk/nextjs';
import AdminSignUp from '@/components/AdminSignUp';
import { Suspense } from 'react';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <section className="h-[60svh] bg-[url('/contact/purple-bg.webp')] flex justify-center items-center">
      <div className="bg-violet-200 rounded-box flex flex-col justify-center items-center p-5">
        <Suspense>
          <SignInButton mode="modal" forceRedirectUrl="/dashboard">
            <Button className="rounded-btn text-center w-48" color="primary">
              Sign in with Clerk
            </Button>
          </SignInButton>
        </Suspense>
        <p className="text-center text-primary text-xl mt-2">OR</p>
        <AdminSignUp />
      </div>
    </section>
  );
}
