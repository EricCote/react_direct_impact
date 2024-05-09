import { use, useState } from 'react';
import ContactAPI from './ContactApiAzure';
import { Button, FormControl, Table } from 'react-bootstrap';

import { Save2, XCircle, PencilFill } from 'react-bootstrap-icons';

export default function Contacts() {
  const contacts = use(ContactAPI.getAllContacts());
  const [selectedRow, setSelectedRow] = useState(
    '5f51485e-c5f8-4aba-8cc4-1912a72ef0ae'
  );

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
                  <Button>
                    <Save2 color='white' size={12} />
                  </Button>
                  <Button>
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
                  <Button>
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
