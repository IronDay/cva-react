import { ReactNode, useRef, useState } from "react";

type ModalTypes = {
  children: ReactNode;
  open: boolean;
  handleModal: (state: boolean) => void;
};

const Modal = ({ children, open, handleModal }: ModalTypes) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState<boolean>(open);

  const modal = openModal && (
    <div ref={modalRef} className="px-8 py-8 shadow-md rounded-md">
      {children}
    </div>
  );

  return modal;
};

export default Modal;
