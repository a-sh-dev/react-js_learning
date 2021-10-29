import React, { useEffect } from "react";

const Modal = ({ closeModal, modalContent }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 5000);
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
