import React from "react";
import "./AppointmentCard.css";
import editImage from "../../../assets/EditarMascota.jpg";

const AppointmentCard = ({ appointment, onDelete }) => {
    return (
        <div className="myappointment-card">
            <img
                src={appointment?.petImage || editImage}
                alt={appointment?.pet || "Mascota"}
                className="appointment-pet-image"
            />
            <div className="appointment-info">
                <h3 className="appointment-pet">{appointment?.pet?.name}</h3>
                <p className="appointment-service">Servicio: {appointment?.service}</p>
                <p className="appointment-date">Fecha: {appointment?.date}</p>
                <p className="appointment-time">Hora: {appointment?.time}</p>
            </div>
            <button className="btn-delete-btn" onClick={() => onDelete?.(appointment?.id)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default AppointmentCard;
