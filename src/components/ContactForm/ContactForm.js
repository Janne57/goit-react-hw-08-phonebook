import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { addContacts } from 'redux/contacts/operations';
import { getContact } from 'redux/contacts/selectors.js';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);


  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    console.log('name', name);
    console.log('value', value);

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = async (evt, values) => {
     evt.preventDefault();

    if (!name.trim()) {
      return;
    }

const contact = {
      id: nanoid(),
      name: evt.currentTarget.elements.name.value,
      number: evt.currentTarget.elements.number.value,
    };

    // console.log('name', name);
    // console.log('number', number);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.warning(`${name} is already in contacts.`);
    } else {
      dispatch(addContacts(contact));
      Notiflix.Notify.success(`${name} is added!`);
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={css.form__basic} onSubmit={handleAddContact}>
      <p>Name</p>
      <input className={css.form__basic__input}
        type="text"
        name="name"
        placeholder='Please, enter name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <p>Number</p>
      <input className={css.form__basic__input}
        type="tel"
        name="number"
        placeholder='Please, enter number phone'
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <button type="submit" 
       className={css.form__button}>
        Add
      </button>
     </form>
  );
};

export default ContactForm;















































// // const ContactForm = () => {
// //   // const dispatch = useDispatch();
// //   // const [name, setName] = useState('');
// //   // const [number, setNumber] = useState('');
// //   // const contacts = useSelector(getContact);

// // const { data, error, isLoading } = useGetContactsQuery();
// // console.log('data', data);
// // console.log('error', error);
// // console.log('isLoading', isLoading);


// // const [ addContact, result] = useAddContactMutation();
// // console.log('addContact', addContact);
// // console.log('result', result);
// // // const state = useSelector(state=>state)
// // // console.log('state', state);

// //   // const handleChange = evt => {
// //   //   const { name, value } = evt.currentTarget;

// //   //   switch (name) {
// //   //     case 'name':
// //   //       setName(value);
// //   //       break;

// //   //     case 'number':
// //   //       setNumber(value);
// //   //       break;

// //   //     default:
// //   //       return;
// //   //   }
// //   // };

// //   // const handleSubmit = evt => {
// //   //   evt.preventDefault();

// //   //   if (!name.trim()) {
// //   //     return;
// //   //   }

// //   //   const contact = {
// //   //     id: nanoid(),
// //   //     name: evt.currentTarget.elements.name.value,
// //   //     number: evt.currentTarget.elements.number.value,
// //   //   };

// //   //   if (
// //   //     contacts.find(
// //   //       contact => contact.name.toLowerCase() === name.toLowerCase()
// //   //     )
// //   //   ) {
// //   //     return alert(`${name} is already in contacts.`);
// //   //   } else {
// //   //     // dispatch(addContact(contact));
// //   //   }

// //   //   setName('');
// //   //   setNumber('');
// //   //   // evt.currentTarget.reset();
// //   //   // evt.currentTarget.elements.number.value.reset();
// //   // };

// //   return (
// //     <form className={css.form__basic} onSubmit={handleSubmit}>
// //       <p>Name</p>
// //       <input
// //         type="text"
// //         name="name"
// //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// //         required
// //         value={name}
// //         onChange={handleChange}
// //       />
// //       <p>Number</p>
// //       <input
// //         type="tel"
// //         name="number"
// //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// //         required
// //         value={number}
// //         onChange={handleChange}
// //       />

// //       <button type="submit" className={css.form__button}>
// //         Add
// //       </button>
// //      </form>
// //   );
// // };

// // export default ContactForm;


