import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalDiv, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const closeModalByEsc = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalDiv>{children}</ModalDiv>
    </Overlay>,
    modalRoot
  );
}
