import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

import ModalLayout from '../ModalLayout';

interface ModalDeleteProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <ModalLayout open={open} onClose={onClose} closeButton>
      <BootstrapModal.Dialog className="m-0">
        <BootstrapModal.Header>
          <BootstrapModal.Title>{title}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{children}</BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Отменить
          </Button>
          <Button variant="primary">Удалить</Button>
        </BootstrapModal.Footer>
      </BootstrapModal.Dialog>
    </ModalLayout>
  );
};

export default ModalDelete;
