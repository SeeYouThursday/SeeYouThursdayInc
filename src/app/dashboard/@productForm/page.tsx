"use client";

import React, { useState } from 'react';
import { Input, Textarea, Button, Spacer } from "@nextui-org/react";

export type ProductProps = {
  id: number;
  title: string;
  href: string;
  description: string;
  shortDescrip: string;
  img_url: string;
  icon_url: string;
  stack: string[];
  createdAt: string;
  updatedAt: string;
};

export default function ProductFormPage() {
  const [product, setProduct] = useState<Partial<ProductProps>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleStackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stackArray = event.target.value.split(',').map(item => item.trim());
    setProduct(prev => ({ ...prev, stack: stackArray }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(product);
    
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Form</h1>
      <p className="mb-4">Welcome to your product form.</p>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Title" 
          name="title" 
          onChange={handleInputChange} 
          className="mb-2"
        />
        <Input 
          label="Href" 
          name="href" 
          onChange={handleInputChange} 
          className="mb-2"
        />
        <Textarea 
          label="Description" 
          name="description" 
          onChange={handleInputChange} 
          className="mb-2"
        />
        <Input 
          label="Short Description" 
          name="shortDescrip" 
          onChange={handleInputChange} 
          className="mb-2"
        />
        <Input 
          label="Image URL" 
          name="img_url" 
          onChange={handleInputChange} 
          className="mb-2"
        />
        <Input 
          label="Icon URL" 
          name="icon_url" 
          onChange={handleInputChange} 
          className="mb-2"
        />
        <Input 
          label="Stack (comma-separated)" 
          name="stack" 
          onChange={handleStackChange} 
          className="mb-2"
        />
        <Spacer y={4} />
        <Button type="submit" color="primary">Submit</Button>
      </form>
    </div>
  );
}