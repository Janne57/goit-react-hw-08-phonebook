import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
   
    filterContact: (state, action) => {
      return state = action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;