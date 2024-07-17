'use client';

import PortfolioCard from '@/components/PortfolioCard';
import { ContactModal } from '@/components/ContactForm';
import { ProductProps } from '@/util/types';

const Products = () => {
  const iball: ProductProps = {
    title: 'iBall247',
    description: 'Basketball Training Program and Merch Site.',
    type: 'E-commerce',
    stack: 'Shopify CMS, PushPress',
    img: '/iball247/SYT-projects-laptop.png',
  };

  return (
    <div className="flex justify-center items-center p-3 bg-white">
      <PortfolioCard {...iball} />
    </div>
  );
};

export default Products;
