import React from "react";
import "./ConfirmationModal.css";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="confirmation">¿Estás seguro de que la cita ha sido atendida?</h2>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Confirmar
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
