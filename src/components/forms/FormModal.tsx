import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import type { FormModalProps } from "../../types/common";

export function FormModal({ title, openModal, onCloseModal, children }: FormModalProps) {
  return (
    <Modal 
      show={openModal} 
      size="5xl" 
      onClose={onCloseModal} 
      popup
      className="!max-h-none !h-auto"
    >
      <ModalHeader>
        <div className="w-full p-5">{title}</div>
      </ModalHeader>
      <ModalBody className="!overflow-visible !max-h-none">
        {children}
      </ModalBody>
    </Modal>
  );
}
