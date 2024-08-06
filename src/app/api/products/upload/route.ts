import { put } from '@vercel/blob';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(
  req: NextRequest,
  formData: FormData
): Promise<NextResponse> {
  'use server';
  try {
    const body = await req.json();
    const { imgFileName, iconFileName } = body;

    //img_url
    const imageFile = formData.get('img_url') as File;
    const blobImg = await put(imgFileName, imageFile, {
      access: 'public',
    });
    // icon_url
    const iconFile = formData.get('icon_url') as File;
    const blobIcon = await put(iconFileName, iconFile, {
      access: 'public',
    });

    return NextResponse.json(blobImg, blobIcon);
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message });
  }
}
