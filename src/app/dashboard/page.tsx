"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ProductForm from "@/components/productForm";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-12 px-8 lg:px-16">
      
      <main className="ml-4 lg:ml-8">
      <h1 className="text-4xl font-semibold pb-14">Welcome</h1>
        <Accordion>
          <AccordionItem title={<span className="text-white">Add a Product</span>} key="1"
          className="border-b border-white">
            <ProductForm />
          </AccordionItem>
          <AccordionItem title={<span className="text-white">Update Product Form</span>} key="2"
          className="border-b border-white">
          </AccordionItem>
          <AccordionItem title={<span className="text-white">Update Admin Form</span>} key="3"
          className="border-b border-white">
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
