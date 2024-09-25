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

export type FormField = {
  name: keyof ProductProps;
  label: string;
  type: 'input' | 'textarea' | 'stack' | 'file';
};
