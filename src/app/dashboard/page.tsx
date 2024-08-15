"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ProductForm from '@/components/ProductForms/productForm';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn) {
      redirect('/admin-login');
      
}
});
  return (
    <div className="container mx-auto py-12 px-8 lg:px-16 flex flex-col min-h-screen">
      <main className="ml-4 lg:ml-8 flex-grow">
      <h1 className="text-4xl font-semibold pb-14 text-violet-200">Welcome</h1>
        <Accordion>
          <AccordionItem
            title={<span className="text-white">Add a Product</span>}
            key="1"
            aria-label="Add a Product"
            textValue="Add Product Form"
            className="border-b border-white"
          >
            <ProductForm />
          </AccordionItem>
          <AccordionItem
            title={<span className="text-white">Update Product Form</span>}
            key="2"
            textValue="Update Product Form"
            className="border-b border-white"
          ></AccordionItem>
          <AccordionItem
            title={<span className="text-white">Update Admin Form</span>}
            key="3"
            textValue="Update Admin Form"
            className="border-b border-white"
          ></AccordionItem>
        </Accordion>
      </main>
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
    </div>
  );
}
