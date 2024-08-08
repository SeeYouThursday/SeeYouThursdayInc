export type ProductProps = {
  id: number;
  title: string;
  href: string;
  description: string;
  shortDescrip: string;
  img_url: string?;
  icon_url: string?;
  stack: string[];
  createdAt: Date;
  updatedAt: Date;
};
