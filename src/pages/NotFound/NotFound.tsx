import defaultImg from "../../assets/notFound.png";
import css from "./NotFound.module.css";
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className={css.notFound}>
      <img src={defaultImg} />
    </div>
  );
};

export default NotFound;
