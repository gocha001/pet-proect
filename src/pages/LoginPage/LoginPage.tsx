import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import css from "./LoginPage.module.css";
import { FC } from 'react';

const LoginPage: FC = () => {
  return (
    <div className={css.wrapper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
