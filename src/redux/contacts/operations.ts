import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id: string, thunkApi) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface Add {
   name: string;
   number: string;
}

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body: Add, thunkApi) => {
    try {
      const { data } = await goitApi.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface Patch {
  values: Add;
  id: string;
}

export const patchContact = createAsyncThunk(
  "contacts/patchContact",
  async ({ values, id }: Patch, thunkApi) => {
    try {
      const { data } = await goitApi.patch(`/contacts/${id}`, values);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
