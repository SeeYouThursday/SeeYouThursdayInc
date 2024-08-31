import ClientList from '@/components/ClientList';
import { Suspense } from 'react';

const Page = () => {
  return (
    <div className="flex justify-center">
      <Suspense fallback={<div>Loading</div>}>
        <ClientList />
      </Suspense>
    </div>
  );
};

export default Page;
