'use client';
import { useState, useRef, Suspense, ChangeEvent } from 'react';
import Image from 'next/image';

import { validateEmail } from '@/app/util/helpers';
import ContactToast from '@/components/ui/ContactToast';
import { LetsConnect } from '@/components/ContactForm/ContactHeadings';
import emailjs from '@emailjs/browser';
import {
  Input,
  Button,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Select,
  SelectItem,
} from '@nextui-org/react';
import RocketIcon from './RocketIcon';
export const ContactForm = ({
  onClose,
  location,
}: {
  onClose?: any;
  location: string;
}) => {
  // const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [plan, setPlan] = useState('');
  const plans: string[] = ['Lite', 'Basic', 'Pro'];

  interface FormInputEvent
    extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {
    target: HTMLInputElement | HTMLTextAreaElement;
  }

  const handleInputChange = (e: FormInputEvent) => {
    const inputValue: string = e.target.value;
    const inputName: string = e.target.name;

    if (inputName === 'firstName' || inputName === 'lastName') {
      setName((prevName) => ({
        ...prevName,
        [inputName]: inputValue,
      }));
    } else if (inputName === 'email') {
      setEmail(inputValue);
    } else if (inputName === 'phone') {
      setPhone(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setPlan(e.target.value);
  // };

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const publicKey: any = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
    const serviceId: any = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId: any = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    if (form.current) {
      e.preventDefault();
      e.stopPropagation();
      emailjs
        .sendForm(serviceId, templateId, '#contactForm', {
          publicKey: publicKey,
        })
        .then(
          () => {
            setSubmit(true);
            if (location === 'modal') {
              onClose();
            }
            setName({ firstName: '', lastName: '' });
            setEmail('');
            setPhone('');
            setMessage('');
          },
          (error) => {
            setError(true);
            console.log(error);
          }
        );
    }
  };

  const form = useRef<HTMLFormElement>(null);

  return (
    <section className="flex flex-col justify-center max-w-[339px] h-full">
      <form
        onSubmit={sendEmail}
        id="contactForm"
        className="flex flex-col items-center justify-between md:flex-nowrap gap-2 text-black"
        ref={form}
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Input
            type="text"
            label="First Name"
            // placeholder=""
            onChange={handleInputChange}
            value={name.firstName}
            variant="faded"
            size="sm"
            name="firstName"
            className="text-black h-[45px]"
            // color={error ? 'danger' : 'default'}
          >
            First Name
          </Input>
          <Input
            type="text"
            label="Last Name"
            onChange={handleInputChange}
            value={name.lastName}
            variant="faded"
            size="sm"
            name="lastName"
            color={error ? 'danger' : 'default'}
            className="text-black h-[45px]"
          >
            Enter Your Name:
          </Input>
        </div>
        <Input
          type="email"
          label="Email"
          // placeholder="naruto@email.com"
          onChange={handleInputChange}
          value={email}
          variant="faded"
          size="sm"
          color={error ? 'danger' : 'default'}
          name="email"
          className="h-[45px]"
        >
          Enter Your Email:
        </Input>
        <Input
          type="tel"
          label="Phone Number"
          // placeholder="804-555-5555"
          onChange={handleInputChange}
          value={phone}
          variant="faded"
          size="sm"
          color={error ? 'danger' : 'default'}
          name="phone"
          className="h-[45px]"
        >
          Enter Your Email:
        </Input>
        {/* <Select
          onChange={handleSelectChange}
          label="Pick Your Plan"
          variant="faded"
          size="sm"
          labelPlacement="inside"
          name="plan"
          value={plan}
        >
          {plans.map((plan) => (
            <SelectItem key={plan}>{plan}</SelectItem>
          ))}
        </Select> */}
        <Textarea
          type="message"
          label="message"
          // placeholder="Message"
          name="message"
          onChange={handleInputChange}
          value={message}
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
            email === '' ||
            name.firstName === '' ||
            name.lastName === '' ||
            message === ''
              ? true
              : false
          }
        >
          Send it to the moon{' '}
          <Image
            src="/contact/rocket.png"
            alt="spaceship"
            width={15}
            height={30}
            quality={100}
          />
        </Button>
      </form>
      <ContactToast submit={submitted} />
    </section>
  );
};

export const ContactModal = ({ location }: { location: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [submitted, setSubmit] = useState(false);

  // Shared Styling of Components
  const divStyle = `flex justify-start items-center`;
  const buttonStyle = `group relative overflow-hidden transition-all`;
  const animationStyle = `absolute bottom-0 left-0 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14`;

  return (
    <>
      <div
        className={location === 'nav' ? divStyle : `${divStyle} pb-5`}
        id="ContactUs"
      >
        <button
          className={
            location === 'nav'
              ? `${buttonStyle} hover:bg-violet-600 p-2 px-3 rounded-3xl text-white`
              : location === 'navMobile'
                ? `${buttonStyle} hover:bg-violet-600 p-2 px-3 rounded-3xl text-white bg-purple-800`
                : `${buttonStyle} rounded-full bg-purple-800 px-14 py-4 text-lg`
          }
          onClick={onOpen}
          id={location === 'nav' ? 'navContact' : 'contact'}
        >
          <span
            className={
              location === 'nav'
                ? `${animationStyle} h-36`
                : `${animationStyle} h-48`
            }
          ></span>
          <span className="font-semibold text-white text-md">Work with Us</span>
        </button>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          className="bg-[url('/contact/purple-bg.webp')]"
          // size="xl"
        >
          <ModalContent>
            {(onClose) => {
              return (
                <>
                  <div className="p-3">
                    <ModalHeader className="text-xl">
                      <LetsConnect location="modal" />
                    </ModalHeader>
                    <div className="flex justify-center">
                      <ContactForm onClose={onClose} location="modal" />
                    </div>
                  </div>
                </>
              );
            }}
          </ModalContent>
        </Modal>
      </Suspense>
      {/* <ContactToast submit={submitted} /> */}
    </>
  );
};

export default ContactForm;
