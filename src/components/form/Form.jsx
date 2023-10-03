import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContacts } from 'redux/selectors';
import { addContact, deleteContact } from 'redux/operations';

const Form = ({ id, name, number, toggleModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);

  const handleNameChange = e => {
    e.preventDefault();
    setEditName(e.target.value);
  };

  const handleNumberChange = e => {
    e.preventDefault();
    const { value } = e.target;
    setEditNumber(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const formDOM = e.currentTarget;
    const editedId = formDOM.id;
    const editedName = formDOM.elements.name.value;
    const editedNumber = formDOM.elements.number.value;

    if (editedName === '') {
      return alert(`Name field should be filled`);
    }
    if (editedNumber === '') {
      return alert(`Number field should be filled`);
    }
    if (contacts.find(e => e.name === editedName && e.id !== editedId)) {
      return alert(`${editedName} is already in contacts`);
    }
    if (contacts.find(e => e.number === editedNumber && e.id !== editedId)) {
      return alert(`Number ${editedNumber} is already in contacts`);
    }

    const editedContact = {
      id: editedId,
      name: editedName,
      number: editedNumber,
    };

    dispatch(deleteContact(editedId));
    dispatch(addContact(editedContact));
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <form className={css.form} id={id} onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={editName}
          onChange={handleNameChange}
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
          value={editNumber}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <div className={css.buttonDiv}>
        <button className={css.button} type="submit">
          Save
        </button>
        <button className={css.button} type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;

Form.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  toggleModal: PropTypes.func,
};
