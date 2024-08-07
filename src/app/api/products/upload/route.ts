import { put } from '@vercel/blob';
import { NextResponse, NextRequest } from 'next/server';
import { useAuth } from '@clerk/nextjs';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
  const auth = useAuth();
  const token = await auth.getToken();

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!auth.isSignedIn) {
          throw new Error('user must be signed in');
        }

        return {
          allowedContentTypes: ['image/webp', 'image/png', 'image/gif'],
          tokenPayload: JSON.stringify({
            token,
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log('blob upload completed', blob, tokenPayload);

        try {
          // Run any logic after the file upload completed
          // const { userId } = JSON.parse(tokenPayload);
          // await db.update({ avatar: blob.url, userId });
        } catch (error) {
          throw new Error('Could not update user');
        }
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
