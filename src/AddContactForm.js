import React, { useState } from 'react';

const AddContactForm = ({ onAddContact }) => {
  const [newContact, setNewContact] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(newContact);
    setNewContact({}); // Limpiar el formulario después de enviar
  };

  return (
    <div>
      <h2>Agregar Nuevo Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={newContact.nombre || ''}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          value={newContact.apellido || ''}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Teléfono"
          name="telefono"
          value={newContact.telefono || ''}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar Contacto</button>
      </form>
    </div>
  );
};

export default AddContactForm;
