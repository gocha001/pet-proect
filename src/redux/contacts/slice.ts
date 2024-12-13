import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  patchContact,
} from "./operations.ts";
import { logout } from "../auth/operations.ts";
import toast from "react-hot-toast";
import { Contacts, Contact } from "../../components/App/App.types.ts";


const initialState: Contacts = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
        state.items = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        toast.success(`Contact ${action.payload.name} deleted successfully.`);
      })
      .addCase(addContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.items.push(action.payload);
        toast.success(`Contact ${action.payload.name} successfully added.`);
      })
      .addCase(patchContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.items.push(action.payload);
        toast.success(`Contact ${action.payload.name} has been edited.`);
      })
      .addCase(logout.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending,
          patchContact.pending
        ),
        (state) => {
          state.error = false;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled,
          patchContact.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected,
          patchContact.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
