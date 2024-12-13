import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors.js";
import { Contacts } from "../../components/App/App.types.js";

interface State {
  contacts: Contacts;
}

export const selectContacts = (state: State) => state.contacts.items;
export const selectLoading = (state: State) => state.contacts.loading;
export const selectError = (state: State) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim()) ||
        contact.number
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim())
    );
  }
);
