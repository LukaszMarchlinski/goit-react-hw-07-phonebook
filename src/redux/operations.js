import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

axios.defaults.baseURL= 'https://630350669eb72a839d7d9568.mockapi.io/contacts/';

export const getContacts = createAsyncThunk('contacts/getContacts', async(_, thunkAPI) => {
    try {
        const response = await axios.get('');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );