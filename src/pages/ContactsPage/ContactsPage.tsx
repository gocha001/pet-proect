import css from "./ContactsPage.module.css";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";
import SearchBox from "../../components/SearchBox/SearchBox.tsx";
import ContactList from "../../components/ContactList/ContactList.tsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations.ts";
import {
  selectLoading,
  selectError,
  selectContacts,
} from "../../redux/contacts/selectors.ts";
import Loader from "../../components/Loader/Loader.tsx";
import Error from "../../components/Error/Error.tsx";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../components/motion/motion.ts";
import ScrollUp from '../../components/ScrollUp/ScrollUp.tsx';
import { FC } from 'react';
import { useAppDispatch } from "../../redux/store.ts";

const ContactsPage: FC = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const [scr, setScr] = useState(0);

  window.onscroll = () => {
    if (window.scrollY > 400) {
      setScr(1);
    } else {
      setScr(0);
    }
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <motion.h1
          variants={slideInFromTop(1)}
          initial="hidden"
          animate="visible"
          className={css.title}
        >
          Phonebook
        </motion.h1>
        <ContactForm />
        {loading && <Loader />}
        {error && <Error />}
        {contacts.length ? (
          <SearchBox />
        ) : (
          <p className={css.note}>You have no saved contacts yet.</p>
        )}
        <ContactList />
        {!!scr && <ScrollUp />}
      </div>
    </>
  );
}

export default ContactsPage;
