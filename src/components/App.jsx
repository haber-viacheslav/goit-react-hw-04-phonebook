import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import PropTypes from 'prop-types';

// Nanoid---------------------------------------
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts !== null) {
      return parsedContacts;
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  const addContact = values => {
    values.id = nanoid();
    if (checkContacts(contacts, values)) {
      return alert(`${values.name} is already in contacts`);
    }

    setContacts(prevContacts => [...prevContacts, values]);
  };

  const checkContacts = (contacts, values) => {
    return contacts.find(contact => contact.name === values.name.trim());
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex-start',
        padding: '40px',
        flexDirection: 'column',
        gap: '40px',
        color: '#ffffff',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          onDeleteContact={deleteContact}
          contacts={getVisibleContacts()}
        />
      </div>
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  filter: PropTypes.string,
};
