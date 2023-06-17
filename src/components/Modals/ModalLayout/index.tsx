import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { CloseButton } from '../..';
import { useClickOutside } from '../../../hooks';
import styles from './ModalLayout.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeButton?: boolean;
}

const ModalLayout: React.FC<ModalProps> = ({ open, onClose, children, closeButton }) => {
  const [isDomReady, setIsDomReady] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, onClose);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  return (
    <>
      {isDomReady &&
        open &&
        createPortal(
          <div className={styles.modal} ref={modalRef}>
            <div className={styles.modal__content}>
              {children}
              {closeButton && <CloseButton className={styles.modal__close_button} onClick={onClose} />}
            </div>
          </div>,
          document.getElementById('modal_root') as Element
        )}
    </>
  );
};

export default ModalLayout;
