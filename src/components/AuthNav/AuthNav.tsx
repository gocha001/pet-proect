import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { FC } from 'react';

const AuthNav: FC = () => {
  return (
    <div className={css.wrapper}>
      <NavLink
        to="login"
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        Login
      </NavLink>
      <NavLink
        to="registed"
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        Registration
      </NavLink>
    </div>
  );
};

export default AuthNav;
