import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import type { ActionModalProps, ActionModalView } from "../../types/common";
import { useState } from "react";
import { HomeView } from "./HomeView";
import { PaymentView } from "./PaymentView";
import { ConfirmationView } from "./ConfirmationView";
import { useStudents } from "../../hooks/useStudents";
import { useProducts } from "../../hooks/useProducts";

export function ActionModal({ openModal, onCloseModal, scout, productId }: ActionModalProps) {
  const [view, setView] = useState<ActionModalView>("HOME");
  const { onConfirmPayment } = useStudents();
  const { fetchProducts } = useProducts();

  const handleCloseModal = () => {
    setView("HOME");
    onCloseModal();
  }

  const handlePayment = async () => {
    try {
      await onConfirmPayment(productId, scout.registration, "paid");
      await fetchProducts("product");
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <Modal show={openModal} 
      size={(view === "EXEMPTION" || view === "CONFIRMATION_MESSAGE") ? "sm" : "lg"} 
      onClose={handleCloseModal} 
      popup
    >
      <ModalHeader/>
        
      <ModalBody>
        {
          view === "HOME" && (
            <HomeView 
              title={scout.name}
              onPayment={() => setView("PAYMENT")}
              onExemption={() => setView("EXEMPTION")}
            />
          )
        }
        {
          view === "PAYMENT" && (
            <PaymentView 
              title="Selecione a forma de pagamento"
              onConfirmation={() => {
                handlePayment();
                setView("CONFIRMATION_MESSAGE")
              }}
            />
          )
        }
        {
          view === "EXEMPTION" && (
            <ConfirmationView 
              title="Isenção confirmada!"
            />
          ) 
        }
        {
          view === "CONFIRMATION_MESSAGE" && (
            <ConfirmationView 
              title="Pagamento confirmado!"
            />
          ) 
        }
      </ModalBody>
    </Modal>
  );
}
