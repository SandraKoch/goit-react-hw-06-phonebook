import { ContactForm } from './ContactForm';
// import { ContactList } from './ContactList';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter onFilter={filter => filterContacts(filter)} /> */}
      {/* <ContactList /> */}
    </div>
  );
};
