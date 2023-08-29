import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/filterSlice.js';
import { getFilter } from '../../redux/contacts/selectors';
import css from '../Filter/Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = evt => {
    dispatch(filterContact(evt.currentTarget.value));
    // console.log("evt.currentTarget.value filter", evt.currentTarget.value)
    };

  return (
    <div> 
      <label className={css.basic}>
        Find contacts by name {'  '} 
        <input 
        type="text" 
        name='filter'
        placeholder='Enter name'
        value={value} 
        onChange={onChange} />
      </label>
    </div>
  );
};


export default Filter;

