import { PropsWithChildren, useEffect } from "react";
import styles from "./Modal.module.css";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => any;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.backdrop} />
          <div className={styles.closeIcon} onClick={() => onClose()}>
            &#x2716;
          </div>

          <div className={styles.modalContent}>{children}</div>
        </div>
      )}
    </>
  );
};
