import { useAppDispatch } from "../../redux/store.ts";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { FC } from 'react';

const UserMenu: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={css.wrapper}>
      <button onClick={() => dispatch(logout())} className={css.btn}>
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
