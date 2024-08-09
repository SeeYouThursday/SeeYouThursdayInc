'use client';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Page = () => {
  const user = useUser();
  const loaded = user.isLoaded;
  if (!user && loaded) {
    redirect('/admin-login');
    return null; // Ensure nothing is rendered after redirect
  }
  return (
    <main className="flex flex-col justify-center items-center p-10">
      <p>Let Brian Make Things Ridiculous.</p>
    </main>
  );
};

export default Page;
