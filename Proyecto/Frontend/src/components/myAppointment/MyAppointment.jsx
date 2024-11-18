import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyAppointment.css";
import Decoracion from "../../assets/decoracion.png";
import AppointmentCard from "../appointmentCard/AppointmentCard";

const MyAppointment = () => {
const navigate = useNavigate();
const [appointments, setAppointments] = useState([]);
useEffect(() => {
  const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  setAppointments(savedAppointments);
}, []);

const deleteAppointment = (appointmentId) => {
  const updatedAppointments = appointments.filter((appt) => appt.id !== appointmentId);
  setAppointments(updatedAppointments);
  localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
};
  return (
    <div className="my-appointments-container">
    <h1>Mis Citas</h1>
    {appointments.length === 0 ? (
      <h3>No hay citas agendadas</h3>
    ) : (
      <div className="appointments-list">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onDelete={deleteAppointment}
          />
        ))}
      </div>
    )}
      <button className="boton-salir" onClick={() => navigate("/sobre-nosotros")}>
      <i className="fas fa-times"></i></button>
      <img id="decoracion-image-top-left" src={Decoracion} alt="Decoracion" />

    </div>
    
  );
};

export default MyAppointment;
