'use client';
import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { SignUpButton, useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
const AdminSignUp = () => {
  const [input, setInput] = useState('');
  const [verified, setVerification] = useState(false);
  const { user } = useUser();

  if (user) {
    redirect('/dashboard');
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passcode = process.env.NEXT_PUBLIC_SIGNUP_PASSCODE?.trim();
    const input = (
      e.currentTarget.elements.namedItem('passcode') as HTMLInputElement
    ).value.trim();

    if (input == passcode) {
      setVerification(true);
    } else {
      alert('Try again!');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={
          !verified
            ? 'flex flex-col w-auto h-18 bg-violet-200 rounded-btn'
            : 'hidden'
        }
      >
        <Input
          label="Passcode"
          name="passcode"
          value={input}
          size="sm"
          className="w-48 m-2"
          onChange={handleInputChange}
        />
        <Button type="submit" size="sm" color="primary">
          <h2>Sign Up With Passcode</h2>
        </Button>
      </form>
      <div className={verified ? 'block' : 'hidden'}>
        <SignUpButton mode="modal">
          <Button
            type="button"
            color="secondary"
            className="text-blue-900 rounded-btn bg-violet-200 p-3 hover:scale-105 m-4"
          >
            Sign Up with Clerk
          </Button>
        </SignUpButton>
      </div>
    </div>
  );
};

export default AdminSignUp;
