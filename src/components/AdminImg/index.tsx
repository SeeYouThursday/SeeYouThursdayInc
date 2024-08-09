import { useUser } from '@clerk/nextjs';
import { handleAdminImgSubmit } from '@/lib/actions';
import { Button } from '@nextui-org/react';

export const AdminImgUpload = async () => {
  return (
    <>
      <form
        action={handleAdminImgSubmit}
        method="post"
        // encType="multipart/form-data"
      >
        <h2 className="text-primary text-2xl">Admin Photo Upload</h2>
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
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default AdminImgUpload;
