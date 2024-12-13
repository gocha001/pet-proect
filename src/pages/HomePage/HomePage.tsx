import css from "./HomePage.module.css";
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Hello! I am your phonebook.</h1>
      <p className={css.item}>Please log in to your account or register.</p>
      <p className={css.author}>Copyright © Igor Kondratuk 2024.</p>
    </div>
  );
};

export default HomePage;
