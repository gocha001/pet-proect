import css from "./Error.module.css";
import { FC } from "react";
import toast from "react-hot-toast";

const Error: FC = () => {
  return (
    <div className={css.error}>
       {toast.error(`Oops... Something went wrong...Try again.`)} 
    </div>
  );
};

export default Error;
