import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


axios.defaults.baseURL =
  'https://connections-api.herokuapp.com/'
  // 'https://64dcb288e64a8525a0f6f8cb.mockapi.io/api/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }  
  }
);


export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', text);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }  
  }
);

export const deleteContacts = createAsyncThunk('contacts/deleteContact',
async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})







// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchAll',
//     async dispatch => {
//       try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get('/contacts');
//         dispatch(fetchingSuccess(response.data));
//       } catch (error) {
//         dispatch(fetchingError(error.message));
//       }
//     }
//   );