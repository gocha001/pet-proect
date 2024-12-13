import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../redux/store.ts";
import { addContact } from "../../redux/contacts/operations.ts";
import { motion } from "framer-motion";
import { slideInFromBot } from "../motion/motion.ts";
import { FC } from 'react';
import { Contact } from "../App/App.types.ts";

const ContactForm: FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: Contact, options: any) => {
    dispatch(addContact(values));
    options.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <motion.div
      variants={slideInFromBot()}
      initial="hidden"
      animate="visible"
      className={css.container}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={orderSchema}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field
              className={css.field}
              name="name"
              placeholder="Enter a name"
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <label>
            <span>Number</span>
            <Field
              className={css.field}
              name="number"
              placeholder="Enter a number"
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
};

export default ContactForm;
