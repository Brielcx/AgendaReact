import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Listado de Contactos</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.nombre} {contact.apellido} - {contact.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
