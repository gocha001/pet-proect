import { useEffect } from "react";
import css from "./Modal.module.css";
import { FC } from 'react';

interface ModalProps {
  children: any;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: any): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={handleBackdropClick} className={css.wrapper}>
      <div className={css.content}>
        <button onClick={onClose} className={css.closeBtn}>
          ×
              </button>
              {children}
      </div>
    </div>
  );
};

export default Modal;
