'use client';
import { useState, useRef, Suspense, ChangeEvent } from 'react';
import { validateEmail } from '@/util/helpers';
import ContactToast from '@/components/ui/ContactToast';
import emailjs from '@emailjs/browser';
import {
  Input,
  Button,
  Textarea,
  Modal,
  ModalContent,
  useDisclosure,
  Select,
  SelectItem,
  Tooltip,
  ModalHeader,
} from '@nextui-org/react';

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
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [plan, setPlan] = useState('');
  const plans: string[] = ['Lite', 'Basic', 'Pro'];

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

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPlan(e.target.value);
  };

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
    <section className="flex flex-col justify-center w-full">
      <form
        onSubmit={sendEmail}
        id="contactForm"
        className="flex flex-col items-center justify-between md:flex-nowrap gap-4 text-black"
        ref={form}
      >
        <Input
          type="text"
          label="name"
          placeholder="John Doe"
          onChange={handleInputChange}
          value={name}
          variant="faded"
          name="name"
          color={error ? 'danger' : 'default'}
          className="text-black"
        >
          Enter Your Name:
        </Input>
        <Input
          type="email"
          label="email"
          placeholder="naruto@email.com"
          onChange={handleInputChange}
          value={email}
          variant="faded"
          color={error ? 'danger' : 'default'}
          name="email"
        >
          Enter Your Email:
        </Input>
        <Select
          onChange={handleSelectChange}
          label="Pick Your Plan"
          variant="faded"
          labelPlacement="inside"
          name="plan"
          value={plan}
        >
          {plans.map((plan) => (
            <SelectItem key={plan}>{plan}</SelectItem>
          ))}
        </Select>
        <Textarea
          type="message"
          label="message"
          placeholder="Message"
          name="message"
          onChange={handleInputChange}
          value={message}
          variant="faded"
        >
          Enter Your Message:
        </Textarea>
        <Button
          className="hover:bg-purple-800 hover:text-white"
          type="submit"
          isDisabled={
            email === '' || name === '' || message === '' ? true : false
          }
        >
          Send It!
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
          className=""
          // size="xl"
        >
          <ModalHeader>
            <h2 className="text-center w-full pt-5 pb-5 text-2xl">
              Reach Out To Us!
            </h2>
          </ModalHeader>
          <ModalContent>
            {(onClose) => {
              return (
                <>
                  <div className="p-3">
                    <ContactForm onClose={onClose} location="modal" />
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
