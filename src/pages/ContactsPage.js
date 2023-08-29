import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../redux/contacts/selectors.js';
import { fetchContacts } from '../redux/contacts/operations.js';
import ContactForm from '../components/ContactForm/ContactForm.js';
import Contacts from '../components/Contacts/Contacts.js';
import Filter from '../components/Filter/Filter.js';
import css from './/ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.basic}>
      <Helmet>
        <title>Your contacts</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          http-equiv="Content-Security-Policy"
          content="script-src 'self'"
        ></meta>
      </Helmet>
      <div >
      <h1 className={css.basic_text}>Phonebook</h1>
      {/* <span className={css.basic_icon}>
          💁‍♀️
        </span></h1> */}
      <ContactForm />
      <h2 className={css.basic_text}>Contacts</h2>
      <Filter />
      <div>{isLoading && "Request in progress..."}</div>
      <Contacts /> 
      </div>
    </div>
  );
}


