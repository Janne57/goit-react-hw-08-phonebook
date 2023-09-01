import React from 'react'; 
import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, getError, getIsLoading, getFilter } from 'redux/contacts/selectors.js';
import { deleteContacts } from 'redux/contacts/operations.js';
import Notiflix from 'notiflix';
import css from '../Contacts/Contacts.module.css';


const Contacts = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContact = getVisibleContact();

  const handleDelete = (id, name) => {
    dispatch(deleteContacts(id));
    Notiflix.Notify.success(`${name} is deleted!`);
  };

  return (
  <div className={css.spiner}>
    {error && <p>UPS!!! Try again....{error}</p>}
    {isLoading ? (
      <p>
        ...Loading
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </p>
    ) : (
      <div>
      <ul className={css.contact__list}>  
        {visibleContact.map(({ id, name, number }) => (
          <li key={id} className={css.contact__item}>
            <p className={css.contact__item__name}>{name}</p>
            <p className={css.contact__item__numb}>{number}</p>
            <button className={css.contact__btn}
              onClick={() => {handleDelete(id, name);}}
              // disabled={result.isFetching}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
      )
    }
  </div>
);
 
};

export default Contacts;



















// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import css from '../Contacts/Contacts.module.css';
// // // import { deleteContact } from '../../redux/contactSlice.js';
// // import { getFilter, getContact } from '../../redux/selectors';
// // import { useGetContactsQuery } from 'redux/contactSlice';

// // const Contacts = () => {
// //   // const dispatch = useDispatch();
// //   // const contacts = useSelector(getContact);
// //   // const filter = useSelector(getFilter);

// //   const {data, error, isLoading} = useGetContactsQuery();
// //   // const getVisibleContact = () => {
// //   //   const normalizedFilter = filter.toLowerCase();

// //   //   return contacts.filter(contact =>
// //   //     contact.name.toLowerCase().includes(normalizedFilter)
// //   //   );
// //   // };

// //   // const visibleContact = getVisibleContact();

// //   // const handleDelete = id => {
// //   //   dispatch(deleteContact(id));
// //   //   console.log('deleteContact', deleteContact(id));
// //   // };

// //   // return (
// //   //   <ul className={css.contact__list}>
// //   //     {visibleContact.map(({ id, name, number }) => (
// //   //       <li key={id} className={css.contact__item}>
// //   //         <p className={css.contact__item__name}>{name}</p>
// //   //         <p className={css.contact__item__numb}>{number}</p>
// //   //         <button
// //   //           // onClick={() => { handleDelete(id); }}
// //   //           onClick={() => null}
// //   //         >
// //   //           Delete
// //   //         </button>
// //   //       </li>
// //   //     ))}
// //   //   </ul>
// //   // );
// // };

// // export default Contacts;
