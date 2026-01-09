import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import type { FormModalProps } from "../types/common";

export function FormModal({ openModal, onCloseModal, children }: FormModalProps) {
  return (
    <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
      <ModalHeader>
        <div className="w-full p-5">Nova doação</div>
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
    </Modal>
  );
}
