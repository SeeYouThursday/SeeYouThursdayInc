import { Suspense } from 'react';
import { FormField, ProductProps } from '@/lib/util/types/product';


const Page = () => {
  return (
    <div className="flex justify-center">
      <Suspense fallback={<div>Loading</div>}>

      </Suspense>
    </div>
  );
};

export default Page;
