import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.ul}>
      {[...visibleContacts]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <li className={css.li} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
