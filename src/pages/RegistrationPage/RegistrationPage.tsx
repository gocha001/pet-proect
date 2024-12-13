import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.tsx";
import css from "./RegistrationPage.module.css";
import { FC } from 'react';

const RegistrationPage: FC = () => {
  return (
    <div className={css.wrapper}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
