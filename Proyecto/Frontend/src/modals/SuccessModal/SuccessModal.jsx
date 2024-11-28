import React from "react";
import "./SuccessModal.css";
import { FaCheckCircle } from "react-icons/fa"; 

const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <i className="fas fa-check-circle modal-check-icon"></i> {/* FontAwesome check icon */}
                </div>
                <h2 className="modal-message">Guardado correctamente</h2>
                <div className="modal-footer">
                    <button className="btn-ok" onClick={onClose}>Okay</button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;