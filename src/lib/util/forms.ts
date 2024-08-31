import { FormField } from '@/lib/util/types/product';

export const formFields: FormField[] = [
  { name: 'title', label: 'Title', type: 'input' },
  { name: 'shortTitle', label: 'Short Title', type: 'input' },
  { name: 'href', label: 'Href', type: 'input' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'shortDescrip', label: 'Short Description', type: 'input' },
  { name: 'stack', label: 'Stack (comma-separated)', type: 'stack' },
];
