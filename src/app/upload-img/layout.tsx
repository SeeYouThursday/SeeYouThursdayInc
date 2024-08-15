'use server';

import { ReactNode } from 'react';
import { UpdateImgForm } from '@/components/ProductForms/img-form';
import { AdminImgUpload } from '@/components/AdminImgUpload';
import { auth } from '@clerk/nextjs/server';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const autho = auth();
  autho.protect();

  return (
    <div className="flex justify-between items-center bg-[url('/upload/bg-img-upload.webp')] bg-cover overflow-hidden bg-no-repeat mt-2 max-w-full">
      <main className="flex flex-col w-full h-full">
        <section className="flex items-start justify-center w-full m-2">
          <div className="bg-slate-900 bg-opacity-30 md:rounded-box p-1">
            <h1 className="text-2xl font-bold text-center text-violet-200">
              Image Upload
            </h1>
            <UpdateImgForm />
            <AdminImgUpload />
          </div>
        </section>

        {children}
      </main>
    </div>
  );
};

export default Layout;
