import ClientDbList from '@/components/ClientList/DbList';
import { Suspense } from 'react';
import { FormField, ProductProps } from '@/lib/util/types/product';


const Page = () => {
  return (
    <div className="flex justify-center">
      <Suspense fallback={<div>Loading</div>}>
        <ClientDbList />
      </Suspense>
    </div>
  );
};

export default Page;
