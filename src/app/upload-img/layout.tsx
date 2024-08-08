'use server';
import { useUser } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { UpdateImgForm } from '@/components/ProductForms/img-form';
import { redirect } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const user = useUser();
  if (!user.isSignedIn) {
    redirect('/admin-login');
  }

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Image Upload</h1>
      </header>
      <main>
        <UpdateImgForm />
        {children}
      </main>
    </div>
  );
};

export default Layout;
