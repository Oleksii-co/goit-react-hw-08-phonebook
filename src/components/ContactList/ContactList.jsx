import { useDispatch, useSelector } from 'react-redux';
import contactList from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const contactData = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filterContacts = contactData.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {isLoading && <p className={contactList.loading}>Loading data...</p>}
      {items.length === 0 && !isLoading && !error && (
        <p className={contactList.noContacts}>There are no contacts</p>
      )}
      {error && <p className={contactList.error}>{error}</p>}
      <ol className={contactList.contactList}>
        {filterContacts.map(({ id, number, name }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default ContactList;


