'use server';
import { Button } from '@nextui-org/react';
import { getAllProducts } from '@/lib/actions';
import { PrismaClient } from '@prisma/client';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { handleFormSubmission } from '@/lib/actions';
export const UpdateImgForm = async () => {
  'use server';
  const projects = await getAllProducts();
  const projectDetails = projects.map((project) => ({
    id: project.id,
    title: project.title,
  }));

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex justify-center flex-col max-w-96"
        action={handleFormSubmission}
        method="post"
        encType="multipart/form-data"
      >
        <select
          title="Client Name"
          name="client"
          className="select select-secondary w-full max-w-xs"
        >
          {projectDetails.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
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
          <label
            className="block text-sm font-medium text-white"
            htmlFor="icon"
          >
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
