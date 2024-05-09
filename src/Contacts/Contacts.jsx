import { use, useState } from 'react';
import ContactAPI from './ContactApiAzure';
import { Button, FormControl, Table } from 'react-bootstrap';

import { Save2, XCircle, PencilFill } from 'react-bootstrap-icons';
import { useQuery } from '@tanstack/react-query';

export default function Contacts() {
  // const contacts = use(ContactAPI.getAllContacts());

  const { data: contacts } = useQuery({
    queryKey: 'contacts',
    queryFn: ContactAPI.getAllContacts,
    options: {
      cacheTime: 10000,
      staleTime: 30000,
      refetchOnWindowFocus: true,
    },
  });

  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <>
      <h1>Contacts</h1>
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
                  <FormControl defaultValue={c.firstName} />
                </td>
                <td>
                  <FormControl defaultValue={c.lastName} />
                </td>
                <td>
                  <FormControl defaultValue={c.email} />
                </td>
                <td>
                  <Button size='sm' className='me-2'>
                    <Save2 color='white' size={12} />
                  </Button>
                  <Button size='sm'>
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
    </>
  );
}
