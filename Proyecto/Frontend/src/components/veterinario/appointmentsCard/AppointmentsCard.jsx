import React, { useState } from "react";
import editImage from "../../../assets/EditarMascota.jpg";
import ConfirmationModal from "../../../modals/ConfirmationModal/ConfirmationModal";
import "./AppointmentsCard.css";

const AppointmentsCard = ({ appointment, onSelectedPet }) => {
    const [isChecked, setIsChecked] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleCheckboxChange = () => {
        setIsModalOpen(true); 
    };

    const handleConfirm = () => {
        setIsChecked(true); 
        setIsModalOpen(false);

        const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        const updatedAppointments = savedAppointments.filter((appt) => appt.id !== appointment.id);

        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
        console.log(`Cita con ID ${appointment.id} eliminada del localStorage`);
    };

    const handleCancel = () => {
        setIsModalOpen(false); 
    };

    return (
        <div className="myappointment-card1">
            <img
                src={appointment?.petImage || editImage}
                alt={appointment?.pet || "Mascota"}
                className="appointment-pet-image1"
            />
            <div className="appointment-info1">
                <h3 className="appointment-pet1">{appointment?.pet?.name}</h3>
                <p className="appointment-service">Servicio: {appointment?.service}</p>
                <p className="appointment-date">Fecha: {appointment?.date}</p>
                <p className="appointment-time">Hora: {appointment?.time}</p>
            </div>
            <div className="appointments-actions">
                <div className="history-container">
                    <button className="history-btn">
                        <i className="fas fa-history"></i>
                    </button>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            className="round-checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange} 
                        />
                        <span className="custom-checkbox"></span>
                    </label>
                </div>
            </div>
            
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={handleCancel}
                onConfirm={handleConfirm}
            />
            <div className="right-container1">
                <button className="btn view-btn1" onClick={() => onSelectedPet(appointment.id)}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default AppointmentsCard;
