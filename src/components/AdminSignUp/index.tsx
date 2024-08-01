'use client';
import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { SignUpButton, useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
const AdminSignUp = () => {
  const [input, setInput] = useState('');
  const [verfied, setVerification] = useState(false);
  const { user } = useUser();

  const passcode = process.env.NEXT_SIGNIN_PASSCODE;

  if (user) {
    redirect('/dashboard');
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    input === passcode ? setVerification(true) : <p>Try again!</p>;
  };

  return (
    <div>
      <h2>Sign Up With Passcode</h2>
      <form onSubmit={handleSubmit} className={!verfied ? 'm-4' : 'hidden'}>
        <Input
          label="Passcode"
          value={input}
          size="sm"
          className="w-48"
          onChange={handleInputChange}
        ></Input>
      </form>
      <div className={verfied ? 'block' : 'hidden'}>
        <SignUpButton>
          <button
            type="button"
            className="text-blue-900 rounded-btn bg-violet-200 p-3 hover:scale-105 m-4"
          >
            Sign in with Clerk
          </button>
        </SignUpButton>
      </div>
    </div>
  );
};

export default AdminSignUp;
