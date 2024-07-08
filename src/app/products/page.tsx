'use client';

import PortfolioCard from '@/components/PortfolioCard';
import { ContactModal } from '@/components/ContactForm';
import { ProductProps } from '@/util/types';

const Products = () => {
  const iball: ProductProps = {
    title: 'iBall247',
    description: '',
    objective: '',
    strategy: '',
    results: '',
    img: '/iball247/gray-iball-247.webp',
  };
  return (
    <div className="flex justify-center items-center p-3 bg-sky-900">
      <PortfolioCard {...iball} />
    </div>
  );
};

export default Products;
