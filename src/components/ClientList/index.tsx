'use client';
import React, { FormEventHandler, Suspense, useEffect, useState } from 'react';
import {
  Listbox,
  ListboxItem,
  Button,
  ButtonGroup,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
} from '@nextui-org/react';
import { getAllProducts } from '@/lib/actions';
import { IconTrash, IconEdit } from '@tabler/icons-react';
import Image from 'next/image';
import { formFields } from '@/lib/util/forms';
import { FormField, ProductProps } from '@/lib/util/types/product';
import ClientDbList from './DbList';
// type Title = {
//   id: number;
//   title: string;
//   shortTitle: string;
//   shortDescrip: string;
//   icon: string;
//   href: string;
// };

export default function ClientList({ clients }: { clients: ProductProps[] }) {
  //   const [clients, setClients] = useState<Title[]>([{ id: 0, title: '' }]);
  const [selectedClient, setSelectedClient] = useState<number>(0);
  const [errors, setError] = useState({ error: false, message: '' });

  //   useEffect(() => {
  //     const fetchClients = async () => {
  //       const clientsData = await getAllProducts('title');
  //       setClients(clientsData);
  //     };

  //     fetchClients();
  //   }, []);

  // const clients: ProductProps[] = [
  //   {
  //     title: 'BleepBloop',
  //     shortTitle: 'Beep',
  //     id: 1234,
  //     href: 'www.yahoo.com',
  //     description: '', // Add the 'description' property
  //     shortDescrip: 'Hello there this is information',
  //     icon_url: 'https://placehold.co/30/orange/white',
  //     img_url: 'https://placehold.co/30/orange/white',
  //     createdAt: '05/13/1990',
  //     updatedAt: '05/13/1990',
  //     stack: [''],
  //   },
  //   {
  //     title: 'BleepBloop',
  //     shortTitle: 'Beep',
  //     id: 12334,
  //     href: 'www.yahoo.com',
  //     description: '', // Add the 'description' property
  //     shortDescrip: 'Hello there this is information',
  //     icon_url: 'https://placehold.co/30/orange/white',
  //     img_url: 'https://placehold.co/30/orange/white',
  //     createdAt: '05/13/1990',
  //     updatedAt: '05/13/1990',
  //     stack: [''],
  //   },
  //   {
  //     title: 'BleepBloop',
  //     shortTitle: 'Beep',
  //     id: 12345,
  //     href: 'www.yahoo.com',
  //     description: '', // Add the 'description' property
  //     shortDescrip: 'Hello there this is information',
  //     icon_url: 'https://placehold.co/30/orange/white',
  //     img_url: 'https://placehold.co/30/orange/white',
  //     createdAt: '05/13/1990',
  //     updatedAt: '05/13/1990',
  //     stack: [''],
  //   },
  // ];

  // TODO: Write Delete Function Here
  const deleteClient = () => {};

  return (
    <>
      <ListboxWrapper>
        {/* Wrapper is located below this function to style */}

        <Listbox
          items={clients}
          aria-label="Dynamic Actions"
          onAction={(key) => setSelectedClient(Number(key))}
          selectionMode="single"
          className="rounded-xl"
          variant="shadow"
        >
          {clients.map((client: ProductProps) => (
            <ListboxItem
              key={client.id}
              textValue={client.title}
              description={client.shortDescrip}
              startContent={
                <Image
                  src={client.icon_url || ''}
                  height={30}
                  width={30}
                  alt={`${client.title}'s logo`}
                />
              }
              endContent={
                client.id === selectedClient ? (
                  <ButtonGroup>
                    <UpdateModal client={client} />
                    <DeleteModal clientName={client.title} />
                  </ButtonGroup>
                ) : null
              }
            >
              {client.title}
            </ListboxItem>
          ))}
        </Listbox>
      </ListboxWrapper>
    </>
  );
}

const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] bg-violet-200/80 border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export const DeleteModal = ({ clientName }: { clientName: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [client, setClient] = useState('');
  const [verified, setVerified] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    const newClientValue = inputElement.value;
    setClient(newClientValue);
    setVerified(newClientValue === clientName);
  };

  const handleClientValidation = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // TODO: Add in Logic for Deleting Client Here
  };

  return (
    <>
      <Button
        isIconOnly
        role="Delete Button"
        title="Delete Button"
        size="sm"
        variant="light"
        color="danger"
        onPress={onOpen}
      >
        <IconTrash stroke={2} className="h-5" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {clientName}
              </ModalHeader>
              <form onSubmit={handleClientValidation}>
                <ModalBody>
                  <p>
                    To remove this client, confirm by typing the name of the
                    client below:
                  </p>
                  <Input
                    type="text"
                    onChange={handleInputChange}
                    value={client}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="danger"
                    type="submit"
                    onSubmit={handleClientValidation}
                    isDisabled={!verified}
                  >
                    Delete
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const UpdateModal = ({ client }: { client: ProductProps }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [verified, setVerified] = useState(false);
  const [editClient, setClientEdit] = useState<Partial<ProductProps>>({});
  const [shortDescripCount, setShortDescripCount] = useState(0);
  const [error, setError] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!editClient) {
      const { title, shortTitle, href } = client;
      setClientEdit((prev) => ({ ...prev, [name]: value }));
    }

    const { name, value } = event.target;
    if (name === 'shortDescrip') {
      setShortDescripCount(value.length);
    }
    setClientEdit((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/clients/updateClient/${client.id}`, {
        method: 'POST',
        body: JSON.stringify(editClient),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <Button
        isIconOnly
        size="sm"
        role="Edit Button"
        title="Edit Button"
        color="primary"
        variant="light"
        className="p-0"
        onPress={onOpen}
      >
        <IconEdit stroke={2} className="h-5" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-primary-800 font-bold">
                {client.title} Update Form
              </ModalHeader>
              {/* Form wraps MB and MF bc the submit btn is in the footer */}
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <Input
                    type="text"
                    label="Client"
                    placeholder={client.title}
                    defaultValue={client.title}
                    onChange={handleInputChange}
                    // value={client.title}
                  />
                  <Input
                    type="text"
                    label="Short Title"
                    placeholder={client.shortTitle}
                    onChange={handleInputChange}
                    defaultValue={client.shortTitle}
                  />
                  <Input
                    type="text"
                    label="Href"
                    placeholder={client.href}
                    defaultValue={client.href}
                    onChange={handleInputChange}
                    // value={client.href}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    // onSubmit={handleClientValidation}
                    isDisabled={error || !client.title}
                  >
                    Update!
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
