'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import ProductForm from '@/components/ProductForms/productForm';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import ClientList from '@/components/ClientList/';

export default function DashboardPage() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn) {
      redirect('/admin-login');
    }
  });

  return (
    <div className="container mx-auto py-12 px-8 lg:px-16 flex flex-col min-h-screen">
      <main className="ml-4 lg:ml-8 flex-grow">
        <h1 className="text-4xl font-semibold pb-14 text-violet-200">
          Welcome, {user?.firstName}!
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <ProductForm />
          <ClientList />
          {/* Admin Update will go here */}
        </div>
        <div className="flex justify-center item-center mt-32">
          <Image
            height={160}
            width={160}
            quality={100}
            src="/SeeYouThursdayGlass.png"
            alt="SeeYouThursday"
            className="w-auto h-auto"
          />
        </div>
      </main>
    </div>
  );
}
