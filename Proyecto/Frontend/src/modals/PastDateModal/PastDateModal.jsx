import React from "react";
import "./PastDateModal.css";

const PastDateModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-error-header">
                    <i className="fas fa-times-circle modal-times-icon"></i> {/* FontAwesome check icon */}
                </div>
                <h2 className="modal-message">La fecha seleccionada ya ha pasado. Por favor, selecciona una fecha futura.</h2>
                <div className="modal-footer">
                    <button className="btn-ok" onClick={onClose}>Okay</button>
                </div>
            </div>
        </div>
    );
};

export default PastDateModal;