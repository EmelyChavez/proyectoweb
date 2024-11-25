import React from "react";
import "./AppointmentsCard.css";

const AppointmentsCard = ({ appointment, onSelectedPet }) => {
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
            <div className="appoinments-actions">
                <div className="right-container1">
                    <button className="btn view-btn1" onClick={() => onSelectedPet(appointment.id)}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsCard;
