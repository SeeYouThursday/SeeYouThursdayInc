'use client';
import { useState, useRef, Suspense } from 'react';
import { validateEmail } from '@/util/helpers';
import emailjs from '@emailjs/browser';
import {
  Input,
  Button,
  Textarea,
  Card,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Tooltip,
} from '@nextui-org/react';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  type env = string;
  interface FormInputEvent
    extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {
    target: HTMLInputElement | HTMLTextAreaElement;
  }

  const handleInputChange = (e: FormInputEvent) => {
    const inputType: string = e.target.type;
    const inputValue: string = e.target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'text') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const publicKey: any = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
    const serviceId: any = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId: any = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
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
    <>
      <h2 className="text-center w-full pt-5 pb-5">Reach Out To Us!</h2>
      <form
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-between md:flex-nowrap gap-4"
        ref={form}
      >
        <Input
          type="text"
          label="name"
          placeholder="John Doe"
          onChange={handleInputChange}
          value={name}
        >
          Enter Your Name:
        </Input>
        <Input
          type="email"
          label="email"
          placeholder="email@email.com"
          onChange={handleInputChange}
          value={email}
        >
          Enter Your Email:
        </Input>
        <Textarea
          type="textarea"
          label="message"
          placeholder="Message"
          onChange={handleInputChange}
          value={message}
        >
          Enter Your Message:
        </Textarea>
        <Button className="hover:bg-purple-800 hover:text-white"
          type="submit"
          isDisabled={
            email === '' || name === '' || message === '' ? true : false
          }
        >
          Send It!
        </Button>
      </form>
    </>
  );
};

export const ContactModal = () => {
  const contactBtn = {
    name: 'contact',
    href: '/contact',
    // icon: faAddressBook,
    ariaLabel: 'Contact Me',
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex justify-start items-center pb-5" id="ContactUs">
        <button className="group relative overflow-hidden rounded-full bg-purple-800 px-14 py-4 text-lg transition-all" onClick={onOpen}>
          <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
          <span className="font-semibold text-purple-200">Work with us</span>
        </button>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => {
              return (
                <>
                  <div className="p-3">
                    <ContactForm />
                  </div>
                </>
              );
            }}
          </ModalContent>
        </Modal>
      </Suspense>
    </>
  );
};

export default ContactForm;
