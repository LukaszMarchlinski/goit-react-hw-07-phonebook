import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const formDOM = evt.currentTarget;
    const newName = formDOM.elements.name.value;
    const newNumber = formDOM.elements.number.value;

    if (newName === '') {
      return alert(`Name field should be filled`);
    }
    if (contacts.find(e => e.name === newName)) {
      return alert(`${newName} is already in contacts`);
    }
    if (contacts.find(e => e.number === newNumber)) {
      return alert(`Number ${newNumber} is already in contacts`);
    }
    if (newNumber === '') {
      return alert(`Number field should be filled`);
    }

    dispatch(
      addContact({
        name: newName,
        number: newNumber,
      })
    );
    formDOM.reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add to contacts
      </button>
    </form>
  );
};

export default ContactForm;
