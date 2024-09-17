'use client';

import React, { useState, useRef } from 'react';
import { Input, Textarea, Button, Spacer, Link } from '@nextui-org/react';
import { useUser } from '@clerk/nextjs';

export type ProductProps = {
  id: number;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  shortDescrip: string;
  img_url?: string;
  icon_url?: string;
  stack: string[];
  createdAt: string;
  updatedAt: string;
};

type FormField = {
  name: keyof ProductProps;
  label: string;
  type: 'input' | 'textarea' | 'stack' | 'file';
};

const formFields: FormField[] = [
  { name: 'title', label: 'Title', type: 'input' },
  { name: 'shortTitle', label: 'Short Title', type: 'input' },
  { name: 'href', label: 'Href', type: 'input' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'shortDescrip', label: 'Short Description', type: 'input' },
  { name: 'stack', label: 'Stack (comma-separated)', type: 'stack' },
];

export default function ProductForm() {
  const [product, setProduct] = useState<Partial<ProductProps>>({});
  const [shortDescripCount, setShortDescripCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return null;
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name === 'shortDescrip') {
      setShortDescripCount(value.length);
    }
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleStackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stackArray = event.target.value.split(',').map((item) => item.trim());
    setProduct((prev) => ({ ...prev, stack: stackArray }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/products/createProduct', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload the product');
      }
      
      setProduct({});
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error uploading product:', err);
    }
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
            value={product[field.name] as string || ''}
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
            value={product.stack?.join(', ') || ''}
            className="mb-2"
          />
        );
      default:
        return (
          <div key={field.name} className="mb-2 relative">
            <Input
              label={field.label}
              name={field.name}
              onChange={handleInputChange}
              maxLength={field.name === 'shortTitle' ? 15 : 30}
              value={product[field.name as keyof ProductProps]?.toString() || ''}
              className="mb-2 justify-start items-start hover:bg-purple text-white"
            />
            {field.name === 'shortDescrip' && (
              <span className="absolute bottom-1 right-2 text-sm text-gray-500">
                {shortDescripCount}/30
              </span>
            )}
          </div>
        );
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product Submitted Successfully</h1>
        <p className="mb-4">Your product has been created. You can now upload images.</p>
        <Link href="/upload-img">
          <Button color="primary">Upload Images</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Product Form</h1>
      <p className="mb-4 text-white">Welcome to your product form.</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          {renderField(formFields.find((field) => field.name === 'title')!)}
        </div>
        <div className="flex mb-4 space-x-4">
          <div className="flex-1">
            {renderField(formFields.find((field) => field.name === 'shortTitle')!)}
          </div>
          <div className="flex-1">
            {renderField(formFields.find((field) => field.name === 'href')!)}
          </div>
        </div>
        {formFields.filter((field) => !['title', 'shortTitle', 'href'].includes(field.name)).map(renderField)}
        <Spacer y={4} />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}