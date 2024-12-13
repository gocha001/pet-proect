
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/auth/selectors.ts';
import Navigation from "../Navigation/Navigation.tsx";
import AuthNav from "../AuthNav/AuthNav.tsx";
import UserMenu from "../UserMenu/UserMenu.tsx";
import { selectUser } from "../../redux/auth/selectors.ts";
import { FC } from 'react';

const AppBar: FC = () => {
  
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.app}>
      <Navigation />
      {user.name && <div className={css.user}>Welcome, {user.name}</div>}
      <div className={css.links}>
        {!isLoggedIn && <AuthNav />}
        {isLoggedIn && <UserMenu />}
      </div>
    </div>
  );
};

 export default AppBar;
