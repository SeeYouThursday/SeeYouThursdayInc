'use server';

import { Select, option, Button, Input } from '@nextui-org/react';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';
import { getAllProducts } from '@/lib/actions';

export const UpdateImgForm = async ({
  productTitle,
}: {
  productTitle: string[];
}) => {
  //   const { getToken, isLoaded, isSignedIn } = useAuth();
  async function uploadImage(formData: FormData) {
    'use server';
    try {
      const imageFile = formData.get('img') as File;
      const iconFile = formData.get('icon') as File;
      const imgBlob = await put(imageFile.name, imageFile, {
        access: 'public',
      });
      const iconBlob = await put(iconFile.name, iconFile, { access: 'public' });
      revalidatePath('/dashboard');
      return { img: imgBlob, icon: iconBlob };
    } catch (error) {
      throw new Error('error uploading');
    }
  }

  const productTitles = await getAllProducts();

  console.log(Array.isArray(productTitles));
  console.log(productTitles[0]);
  const titleString = productTitles.toString();
  console.log(titleString);

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex justify-center flex-col max-w-96"
        action={uploadImage}
      >
        <select
          title="Client Name"
          className="select select-secondary w-full max-w-xs"
        >
          {productTitle.map((title) => {
            return <option key={title}>{title}</option>;
          })}
        </select>
        <div className="mb-2">
          <label className="block text-sm font-medium text-white" htmlFor="img">
            Upload Img
          </label>
          <input
            // id={field.name}
            title="img"
            type="file"
            name="img"
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-white" htmlFor="img">
            Upload Icon
          </label>
          <input
            // id={field.name}
            title="icon"
            type="file"
            name="icon"
            className="mt-1 block w-full text-sm text-white
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
