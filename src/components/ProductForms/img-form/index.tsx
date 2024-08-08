'use server';

import { Button } from '@nextui-org/react';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { getAllProducts } from '@/lib/actions';
import { PrismaClient } from '@prisma/client';

export const UpdateImgForm = async () => {
  //   const { getToken, isLoaded, isSignedIn } = useAuth();
  const prisma = new PrismaClient();
  const projects = await getAllProducts();
  const projectTitle = projects.map((project) => project.title);

  async function uploadImage(formData: FormData) {
    'use server';

    const imageFile = formData.get('img') as File;
    const iconFile = formData.get('icon') as File;
    try {
      const imgBlob = await put(imageFile.name, imageFile, {
        access: 'public',
      });
      const iconBlob = await put(iconFile.name, iconFile, { access: 'public' });
      revalidatePath('/dashboard');
      const result = { img: imgBlob, icon: iconBlob };
      return result;
    } catch (error) {
      throw new Error('error uploading');
    } finally {
        //write a prisma function to update the selected client with the image File and iconFile 
    }
  }

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex justify-center flex-col max-w-96"
        action={uploadImage}
      >
        <select
          title="Client Name"
          name="client"
          className="select select-secondary w-full max-w-xs"
        >
          {projectTitle.map((title) => {
            return <option key={title}>{title}</option>;
          })}
        </select>
        <div className="mb-2">
          <label className="block text-sm font-medium text-white" htmlFor="img">
            Upload Img
          </label>
          <input
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
            title="icon"
            type="file"
            name="icon"
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
