import { use, useState } from 'react';
import ContactAPI from './ContactApiAzure';
import { Button, FormControl, Table } from 'react-bootstrap';

import { Save2, XCircle, PencilFill } from 'react-bootstrap-icons';
import { useQuery } from '@tanstack/react-query';

export default function Contacts() {
  // const contacts = use(ContactAPI.getAllContacts());

  const { data: contacts, refetch } = useQuery({
    queryKey: 'contacts',
    queryFn: ContactAPI.getAllContacts,
    options: {
      cacheTime: 10000,
      staleTime: 30000,
      refetchOnWindowFocus: true,
    },
  });

  const [selectedRow, setSelectedRow] = useState(null);

  async function saveFn(formData) {
    const obj = {};
    obj.id = formData.get('id');
    obj.firstName = formData.get('firstName');
    obj.lastName = formData.get('lastName');
    obj.email = formData.get('email');
    await ContactAPI.saveContact(obj);
    setSelectedRow(null);
    refetch();
  }

  return (
    <>
      <h1>Contacts</h1>
      <form action={saveFn}>
        <Table striped hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) =>
              selectedRow === c.id ? (
                <tr key={c.id}>
                  <td>
                    <input type='hidden' defaultValue={c.id} name='id' />
                    <FormControl defaultValue={c.firstName} name='firstName' />
                  </td>
                  <td>
                    <FormControl defaultValue={c.lastName} name='lastName' />
                  </td>
                  <td>
                    <FormControl defaultValue={c.email} name='email' />
                  </td>
                  <td>
                    <Button type='submit' size='sm' className='me-2'>
                      <Save2 color='white' size={12} />
                    </Button>
                    <Button
                      size='sm'
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedRow(null);
                      }}
                    >
                      <XCircle color='white' size={12} />
                    </Button>
                  </td>
                </tr>
              ) : (
                <tr key={c.id}>
                  <td>{c.firstName}</td>
                  <td>{c.lastName}</td>
                  <td>{c.email}</td>
                  <td>
                    <Button
                      size='sm'
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedRow(c.id);
                      }}
                    >
                      <PencilFill color='white' size={12} />
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </form>
    </>
  );
}
