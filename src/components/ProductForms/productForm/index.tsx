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
  // { name: 'img_url', label: 'Image Upload', type: 'file' },
  // { name: 'icon_url', label: 'Icon Upload', type: 'file' },
  { name: 'stack', label: 'Stack (comma-separated)', type: 'stack' },
];

export default function ProductForm() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [product, setProduct] = useState<Partial<ProductProps>>({});

  const user = useUser();
  if (!user.isSignedIn) {
    return <></>;
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleStackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stackArray = event.target.value.split(',').map((item) => item.trim());
    setProduct((prev) => ({ ...prev, stack: stackArray }));
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof ProductProps
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (fieldName === 'img_url') {
        setImageFile(file);
      } else if (fieldName === 'icon_url') {
        setIconFile(file);
      }
      setProduct((prev) => ({ ...prev, [fieldName]: file.name }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const upload = await fetch('/api/products/createProduct', {
        method: 'POST',
        body: JSON.stringify({ ...product }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setProduct({});
      return upload;
    } catch (err) {
      throw new Error('whoops, something went wrong');
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
      case 'file':
        return (
          <div key={field.name} className="mb-2">
            <label
              className="block text-sm font-medium text-white"
              htmlFor={field.name}
            >
              {field.label}
            </label>
            <input
              id={field.name}
              ref={inputFileRef}
              type="file"
              name={field.name}
              onChange={(e) =>
                handleFileChange(e, field.name as keyof ProductProps)
              }
              className="mt-1 block w-full text-sm text-white
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
            />
          </div>
        );
      default:
        return (
          <Input
            key={field.name}
            label={field.label}
            name={field.name}
            onChange={handleInputChange}
            className="mb-2  hover: bg-purple text-white"
          />
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Form</h1>
      <p className="mb-4">Welcome to your product form.</p>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        {formFields.map((field) => {
          if (field.name === 'img_url' || field.name === 'icon_url') {
            return null;
          }
          return renderField(field);
        })}
        {/* <div className="flex justify-center mb-2">
          {renderField(formFields.find((field) => field.name === 'img_url')!)}
          <Spacer x={6} />
          {renderField(formFields.find((field) => field.name === 'icon_url')!)}
        </div> */}
        <Spacer y={4} />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
      <Link href="/upload-img">Upload Images Here</Link>
    </div>
  );
}
