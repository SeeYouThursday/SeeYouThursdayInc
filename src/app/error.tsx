"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-lg mb-8">An unexpected error has occurred.</p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
        >
          Go to Homepage
        </button>
        <button
          onClick={reset}
          className="mt-4 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
