import cx from "classnames";
import Portal from "../Portal/index";

import { twMerge } from "tailwind-merge";

import styles from "./styles.module.css";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onBackdropClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onBackdropClick,
  className,
  style,
}) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      event.currentTarget.classList.contains(styles.modalContainer) &&
      onBackdropClick
    ) {
      onBackdropClick();
    }
  };

  return (
    <>
      {open && (
        <div
          className={twMerge(cx(styles.modalContainer, className))}
          onClick={handleBackdropClick}
          style={style}
        >
          {children}
        </div>
      )}
    </>
  );
};

const PortalModal = Portal(Modal);

export default PortalModal;
