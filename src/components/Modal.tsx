import { ReactNode, useEffect, useRef, useState } from "react";

type ModalTypes = {
  children: ReactNode;
  open: boolean;
  handleModal: (state: boolean) => void;
};

const Modal = ({ children, open, handleModal }: ModalTypes) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState<boolean>(open);
  /* const hModal = useCallback(
    (state: boolean) => handleModal(state),
    [handleModal]
  ); */

  useEffect(() => {
    const e = document.addEventListener("click", (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal((openModal) => !openModal);
        handleModal(openModal);
      }
    });
    return () => document.removeEventListener("click", e);
  }, [handleModal, openModal]);

  useEffect(() => {
    setOpenModal(() => open);
  }, [open]);

  const modal = openModal && (
    <div ref={modalRef} className="px-8 py-8 shadow-md rounded-md">
      {children}
    </div>
  );

  return modal;
};

export default Modal;
