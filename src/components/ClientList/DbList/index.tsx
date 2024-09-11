'use server';
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
// import { DeleteModal, UpdateModal } from '../index';
import ClientList from '../../ClientList/index';
import { Suspense } from 'react';

const ClientDbList = async () => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://seeyouthursday.dev';

  const response = await fetch(`${baseUrl}/api/clients/getClient`);
  const clients = await response.json();

  return (
    <>
      <ClientList clients={clients} />
    </>
  );
};

export default ClientDbList;
