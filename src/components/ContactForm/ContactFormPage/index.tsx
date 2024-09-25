'use client';
import emailjs from '@emailjs/browser';
import { useState, useRef, Suspense } from 'react';
import Image from 'next/image';
import { validateEmail } from '@/lib/util/helpers';
import Toast from '@/components/ui/Toast';
import { LetsConnect } from '@/components/ContactForm/ContactHeadings';
import { FormInputEvent } from '@/lib/util/types/types';
import { Input, Button, Textarea } from '@nextui-org/react';

interface ErrorState {
  emailJsError: boolean;
  emailJsErrorMessage: string;
  formError: boolean;
}

const ContactForm = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const initialError: ErrorState = {
    emailJsError: false,
    emailJsErrorMessage: '',
    formError: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(initialError);
  const [submitted, setSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const publicKey: any = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
    const serviceId: any = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId: any = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration');
      return;
    }

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          '#contactForm',
          publicKey
        );
        console.log('Email successfully sent!', result.status, result.text);
        setSubmit(true);
        // reset the form
        setFormData(initialFormData);
      }
    } catch (err) {
      console.error('Failed to send email:', err);
      setError((prevState) => ({
        ...prevState,
        ['emailJsError']: true,
      }));
    }
  };

  const form = useRef<HTMLFormElement>(null);
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center w-full place-self-end"> */}
      <form
        id="contactForm"
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center md:flex-nowrap gap-2 text-black"
        ref={form}
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Input
            type="text"
            label="First Name"
            onChange={handleChange}
            value={formData.firstName}
            variant="faded"
            size="sm"
            name="firstName"
            className="text-black"
            color={error.formError ? 'danger' : 'default'}
          >
            First Name
          </Input>
          <Input
            type="text"
            label="Last Name"
            onChange={handleChange}
            value={formData.lastName}
            variant="faded"
            size="sm"
            name="lastName"
            color={error.formError ? 'danger' : 'default'}
            className="text-black"
          >
            Enter Your Name:
          </Input>
        </div>
        <Input
          type="email"
          label="Email"
          // placeholder="naruto@email.com"
          onChange={handleChange}
          value={formData.email}
          variant="faded"
          size="sm"
          color={error.formError ? 'danger' : 'default'}
          name="email"
          className=""
        >
          Enter Your Email:
        </Input>
        <Input
          type="tel"
          label="Phone Number"
          // placeholder="804-555-5555"
          onChange={handleChange}
          value={formData.phone}
          variant="faded"
          size="sm"
          color={error.formError ? 'danger' : 'default'}
          name="phone"
          className=""
        >
          Enter Your Email:
        </Input>{' '}
        <Textarea
          type="message"
          label="Message"
          // placeholder="Message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          variant="faded"
          size="sm"
          minRows={3}
          maxRows={3}
        >
          Enter Your Message:
        </Textarea>
        <Button
          className="hover:bg-purple-800 hover:text-white"
          type="submit"
          isDisabled={
            formData.email === '' ||
            formData.message === '' ||
            formData.firstName === '' ||
            formData.lastName === '' ||
            formData.phone === ''
          }
        >
          Send it to the moon
          <Image
            src="/contact/rocket.png"
            alt="spaceship"
            width={25}
            height={40}
            quality={100}
            className="h-auto w-auto"
          />
        </Button>
      </form>
      {error.emailJsError ? <p>{error.emailJsErrorMessage}</p> : null}
      {/* </div> */}
      <Toast submit={submitted} message="Message sent successfully." />
    </>
  );
};

export default ContactForm;
