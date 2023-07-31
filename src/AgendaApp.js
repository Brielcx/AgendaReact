import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';

const AgendaApp = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://www.raydelto.org/agenda.php');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);
  const handleAddContact = async (newContact) => {
        try {
      const response = await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };
  return (
    <div>
      <h1>Agenda de Contactos</h1>
      <AddContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default AgendaApp;
