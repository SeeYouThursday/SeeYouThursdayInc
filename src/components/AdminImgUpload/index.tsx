import { handleAdminImgSubmit } from '@/lib/actions';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
export const AdminImgUpload = async () => {
  return (
    <div className="flex flex-col md:flex-row justify-center flex-wrap items-center m-3 bg-slate-50 p-3 md:rounded-box">
      <form action={handleAdminImgSubmit} method="POST" className="m-3">
        <div className="mb-2">
          <label className="block text-sm font-medium text-black" htmlFor="img">
            Upload Img
          </label>
          <input
            title="img"
            type="file"
            name="img"
            className="file-input file-input-bordered file-input-primary"
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-primary text-2xl m-2 font-bold text-center text-balance">
          Admin Photo Upload
        </h2>
        <Image
          src="/upload/space-upload.webp"
          alt="spaceman on a computer working"
          height="180"
          width="180"
        />
      </div>
    </div>
  );
};

export default AdminImgUpload;
