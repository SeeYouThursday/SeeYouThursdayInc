'use server';
import { ReactNode } from 'react';
import { UpdateImgForm } from '@/components/ProductForms/img-form';
import { AdminImgUpload } from '@/components/AdminImg';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Image Upload</h1>
      </header>
      <main>
        <UpdateImgForm />
        <AdminImgUpload />
        {children}
      </main>
    </div>
  );
};

export default Layout;
