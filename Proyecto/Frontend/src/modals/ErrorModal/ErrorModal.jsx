import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-error-header">
                    <i className="fas fa-times-circle modal-times-icon"></i> {/* FontAwesome check icon */}
                </div>
                <h2 className="modal-message">Por favor, completa todos los campos obligatorios.</h2>
                <div className="modal-footer">
                    <button className="btn-ok" onClick={onClose}>Okay</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;