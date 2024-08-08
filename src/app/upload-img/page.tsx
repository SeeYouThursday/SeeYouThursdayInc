import { UpdateImgForm } from '@/components/ProductForms/img-form';
import { getAllProducts } from '@/lib/actions';

const Page = async () => {
  return (
    <main className="flex flex-col justify-center items-center p-10">
      <UpdateImgForm />
    </main>
  );
};

export default Page;
