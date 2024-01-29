import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const result = await response.json();
        setContacts(result); // Set the contacts held in state with the fetched data
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  console.log(contacts); // Console log to double check that the data is held in state

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
}

