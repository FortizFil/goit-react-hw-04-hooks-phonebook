import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/contactForm';
import ContactsList from './components/ContactsList/contactsList';
import Filter from './components/Filter/filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = e => {
    const { name, number } = e;
    return {
      id: uuidv4(),
      name: name,
      number: number,
    };
  };

  const deleteContact = contactId => {
    setContacts(s => s.filter(s => s.id !== contactId));
  };

  const handlerOnSubmit = e => {
    const newContacts = addContact(e);
    const contactName = contacts.map(contact => contact.name);

    if (contactName.includes(e.name)) {
      alert(`${e.name} is already in contacts`);
    } else {
      const newContactsList = [...contacts, newContacts];
      setContacts(s => (s = newContactsList));
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  useEffect(() => {
    const contacts = window.localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(s => (s = parsedContacts));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handlerOnSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
