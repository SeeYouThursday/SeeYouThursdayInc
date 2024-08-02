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

type FormField = {
  name: keyof ProductProps;
  label: string;
  type: 'input' | 'textarea' | 'stack';
};

const formFields: FormField[] = [
  { name: 'title', label: 'Title', type: 'input' },
  { name: 'href', label: 'Href', type: 'input' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'shortDescrip', label: 'Short Description', type: 'input' },
  { name: 'img_url', label: 'Image URL', type: 'input' },
  { name: 'icon_url', label: 'Icon URL', type: 'input' },
  { name: 'stack', label: 'Stack (comma-separated)', type: 'stack' },
];

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

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'textarea':
        return (
          <Textarea 
            key={field.name}
            label={field.label} 
            name={field.name} 
            onChange={handleInputChange} 
            className="mb-2"
          />
        );
      case 'stack':
        return (
          <Input 
            key={field.name}
            label={field.label} 
            name={field.name} 
            onChange={handleStackChange} 
            className="mb-2"
          />
        );
      default:
        return (
          <Input 
            key={field.name}
            label={field.label} 
            name={field.name} 
            onChange={handleInputChange} 
            className="mb-2"
          />
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Form</h1>
      <p className="mb-4">Welcome to your product form.</p>
      <form onSubmit={handleSubmit}>
        {formFields.map(renderField)}
        <Spacer y={4} />
        <Button type="submit" color="primary">Submit</Button>
      </form>
    </div>
  );
}