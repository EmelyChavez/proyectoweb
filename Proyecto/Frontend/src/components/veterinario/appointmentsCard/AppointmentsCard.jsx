import React, { useState } from "react";
import "./AppointmentsCard.css";

const AppointmentsCard = ({ appointment, onSelectedPet }) => {
    const [isChecked, setIsChecked] = useState(false); // Estado para manejar el check

    const handleCheck = () => {
        setIsChecked(!isChecked); // Alterna entre marcado/no marcado
        if (!isChecked) {
            // Eliminar cita del localStorage
            const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
            const updatedAppointments = savedAppointments.filter((appt) => appt.id !== appointment.id);

            localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
            console.log(`Cita con ID ${appointment.id} eliminada del localStorage`);
        }
    };

    return (
        <div className="myappointment-card1">
            <img
                src={appointment?.petImage || "https://via.placeholder.com/150"}
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
                            onChange={handleCheck} // Cambia el estado y elimina del localStorage
                        />
                        <span className="custom-checkbox">
                        </span>
                    </label>
                </div>

            </div>
            <div className="right-container1">
                <button className="btn view-btn1" onClick={() => onSelectedPet(appointment.id)}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

        </div>
    );
};

export default AppointmentsCard;
