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
    const publicKey: env = process.env.NEXT_EMAIL_PUBLIC_KEY!;
    const serviceId: env = process.env.NEXT_SERVICE_ID!;
    const templateId: env = process.env.NEXT_TEMPLATE_ID!;

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

  const form = useRef();

  return (
    <Card className="w-full p-8">
      <CardHeader className="text-center w-full">Reach Out To Us!</CardHeader>
      <form
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-between md:flex-nowrap gap-4"
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
        <Button
          type="submit"
          isDisabled={
            email === '' || name === '' || message === '' ? true : false
          }
        >
          Send It!
        </Button>
      </form>
    </Card>
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
      <div className="flex justify-start items-center pb-5" id='ContactUs'>
        {/* <Tooltip
          content="Contact Me"
          placement={location === 'under' ? 'bottom' : 'right-end'}
        > */}
        <Button 
          // radius=""
          isIconOnly={true}
          aria-label={contactBtn.ariaLabel}
          variant="shadow"
          className="m-1 mt-5 hover:scale-110 w-28"
          color="primary"
          onPress={onOpen}
        >
          {/* <FontAwesomeIcon icon={contactBtn.icon} /> */}
          <h3 className="ms-1 text-sm text-balance text-center">Contact Us!</h3>
        </Button>
        {/* </Tooltip> */}
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
                  <ModalHeader>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onClose}
                    ></Button>
                  </ModalHeader>
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
