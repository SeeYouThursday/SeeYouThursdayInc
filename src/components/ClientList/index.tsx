'use client';
import React, { FormEventHandler, Suspense, useEffect, useState } from 'react';
import { revalidatePath } from 'next/cache';

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
import { IconTrash, IconEdit } from '@tabler/icons-react';
import Image from 'next/image';
import { formFields } from '@/lib/util/forms';
import { FormField, ProductProps } from '@/lib/util/types/product';
import Toast from '../ui/Toast';

export default function ClientList() {
  const [settingClients, setClients] = useState<ProductProps[]>([]);
  const [selectedClient, setSelectedClient] = useState<number>(0);
  const [successMessage, setSuccessMessage] = useState('');

  const refreshClients = async () => {
    try {
      const response = await fetch('/api/clients/getClient', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      });

      if (!response.ok) {
        throw new Error(`Error ${response.statusText}`);
      }

      const updatedClients = await response.json();
      setClients(updatedClients);
    } catch (error) {
      console.error('Failed to fetch clients:', error);
    }
  };
  useEffect(() => {
    refreshClients();
  }, []);

  useEffect(() => {
    if (successMessage) {
      refreshClients();
    }
  }, [successMessage]);

  const DeleteModal = ({ client }: { client: ProductProps }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedClient, setClient] = useState('');
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState({ error: false, message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputElement = e.target as HTMLInputElement;
      const newClientValue = inputElement.value;
      setClient(newClientValue);
      setVerified(newClientValue === client.title);
    };

    const handleClientValidation = async (e: {
      preventDefault: () => void;
    }) => {
      e.preventDefault();
      //Logic for Deleting Client
      if (verified) {
        try {
          const id = client.id;
          const response = await fetch(`/api/clients/deleteClient/`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          });
          const updatedClients = await response.json();
          if (response.ok) {
            setSuccessMessage(`Client ${id} deleted successfully.`);
          }
        } catch (err: any) {
          setError((prev) => ({ ...prev, message: String(err) }));
          setSuccessMessage('');
        }
      } else {
        setVerified(false);
        return;
      }
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
                  {client.title}
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
                      value={selectedClient}
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
                <Toast submit={verified} message={successMessage} />
              </>
            )}
          </ModalContent>
        </Modal>
        <p>{error.message}</p>
      </>
    );
  };

  return (
    <>
      <ListboxWrapper>
        {/* Wrapper is located below this function to style */}
        <h3 className="text-2xl font-semibold text-center">Clients</h3>
        <hr></hr>
        <Listbox
          items={settingClients}
          aria-label="Dynamic Actions"
          onAction={(key) => setSelectedClient(Number(key))}
          selectionMode="single"
          className="rounded-xl"
          variant="shadow"
        >
          {settingClients.map((client: ProductProps) => (
            <ListboxItem
              key={client.id}
              textValue={client.title}
              description={client.shortDescrip}
              startContent={
                <Image
                  src={
                    client.icon_url
                      ? client.icon_url
                      : 'https://placehold.co/300'
                  }
                  height={30}
                  width={30}
                  alt={`${client.title}'s logo`}
                />
              }
              endContent={
                client.id === selectedClient ? (
                  <ButtonGroup>
                    <UpdateModal client={client} />
                    <DeleteModal client={client} />
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
  <div className="w-[300px]  bg-violet-200/80 border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export const UpdateModal = ({ client }: { client: ProductProps }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [verified, setVerified] = useState(false);
  const [editClient, setClientEdit] = useState<Partial<ProductProps>>({});
  const [clientId, setClientId] = useState<number>();
  const [shortDescripCount, setShortDescripCount] = useState(0);
  const [error, setError] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setClientId(client.id);
    if (!editClient) {
      const { id, title, shortTitle, href } = client;
      setClientEdit({ id, title, shortTitle, href });
    } else {
      setClientEdit((prev) => ({ ...prev, [name]: value, id: client.id }));
    }

    const { name, value } = event.target;
    if (name === 'shortDescrip') {
      setShortDescripCount(value.length);
    }
    setClientEdit((prev) => ({ ...prev, [name]: value }));
  };

  const handleStackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stackArray = event.target.value.split(',').map((item) => item.trim());
    setClientEdit((prev) => ({ ...prev, stack: stackArray }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/clients/updateClient`, {
        method: 'PUT',
        body: JSON.stringify(editClient),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
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
                    name="title"
                    placeholder={client.title}
                    defaultValue={client.title}
                    onChange={handleInputChange}
                    // value={client.title}
                  />
                  <Input
                    type="text"
                    label="Short Title"
                    name="shortTitle"
                    placeholder={client.shortTitle}
                    onChange={handleInputChange}
                    defaultValue={client.shortTitle}
                  />
                  <Input
                    type="text"
                    label="Href"
                    name="href"
                    placeholder={client.href}
                    defaultValue={client.href}
                    onChange={handleInputChange}
                    // value={client.href}
                  />
                  <Textarea
                    type="text"
                    label="Description"
                    name="description"
                    placeholder={client.description}
                    defaultValue={client.description}
                    onChange={handleInputChange}
                    // value={client.href}
                  />
                  <Input
                    type="text"
                    label="Short Description"
                    name="shortDescrip"
                    placeholder={client.shortDescrip}
                    defaultValue={client.shortDescrip}
                    onChange={handleInputChange}
                    max={30}
                    // value={client.href}
                  />
                  <Input
                    type="text"
                    label="Stack"
                    name="stack"
                    placeholder={client.stack.toLocaleString()}
                    defaultValue={client.stack.toLocaleString()}
                    onChange={handleStackChange}
                    max={30}
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
                    isDisabled={error}
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
