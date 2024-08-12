'use client';
import emailjs from '@emailjs/browser';
import { useState, useRef, Suspense } from 'react';
import Image from 'next/image';
import { validateEmail } from '@/lib/util/helpers';
import ContactToast from '@/components/ui/ContactToast';
import { LetsConnect } from '@/components/ContactForm/ContactHeadings';
import { FormInputEvent } from '@/lib/util/types/types';

const ContactForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const initialEmailError = {
    emailError: false,
    errorMessage: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(initialEmailError);
  const [submitted, setSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const publicKey: any = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
    const serviceId: any = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId: any = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, '#contactForm', {
          publicKey: publicKey,
        })
        .then(() => {
          setSubmit(true);
          //reset the form
          setFormData(initialFormData);
        })
        .catch((err: Error) => {
          // handle the error here
          setEmailError({ emailError: true, errorMessage: err.message });
        });
    }
  };

  const form = useRef<HTMLFormElement>(null);
  return (
    <>
      <form id="contactForm"></form>
      {emailError ? <p>emailError.message</p> : null}
    </>
  );
};
