import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import Loader from './loader/Loader';

const App = () => {
const dispatch = useDispatch();
const isLoading = useSelector(selectIsLoading);
const error= useSelector(selectError);

useEffect(() => {
dispatch(getContacts());
}, [dispatch])


  return (
    <main className={css.main}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </main>
  );
};

export default App;
