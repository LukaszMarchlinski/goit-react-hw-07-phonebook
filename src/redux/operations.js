import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

axios.defaults.baseURL= 'https://6310c75a36e6a2a04ef77841.mockapi.io/contacts/';

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