import React from "react";
import "./AppointmentCardAdmin.css";
import editImage from "../../../assets/EditarMascota.jpg";

const AppointmentCardAdmin = ({ appointment, onDelete }) => {
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
        </div>
    );
};

export default AppointmentCardAdmin;
