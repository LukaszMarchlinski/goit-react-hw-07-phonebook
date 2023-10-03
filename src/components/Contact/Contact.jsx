import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/operations';
import { useState } from 'react';
import Form from '../form/Form';
const { useDispatch } = require('react-redux');

const Contact = ({ id, name, number }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = e => {
    setIsEditModalOpen(true);
  };

  const handleDelete = e => {
    const { id } = e.target;
    dispatch(deleteContact(id));
  };

  const toggleModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <p className={css.p}>
        {name}: {number}
      </p>
      <button
        className={css.button}
        type="button"
        name="edit"
        id={id}
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className={css.button}
        type="button"
        name="delete"
        id={id}
        onClick={handleDelete}
      >
        Delete
      </button>
      {isEditModalOpen && (
        <div className={css.modalOverlay}>
          <Form id={id} name={name} number={number} toggleModal={toggleModal} />
        </div>
      )}
    </>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
