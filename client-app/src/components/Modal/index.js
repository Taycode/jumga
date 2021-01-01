import React from "react";
import { Modal } from "react-bootstrap";
import "./styles.scss";

const ModalComponent = ({ showModal, setShowModal, children }) => {
  const toggle = () => setShowModal({ show: false });
  return (
    <>
      <Modal
        className="pb-4 custom-modal"
        show={showModal.show}
        onHide={toggle}
      >
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
