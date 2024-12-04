import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentAdmin.css";
import Decoracion from "../../../assets/decoracion.png";
import AppointmentCardAdmin from "../appointmentCardAdmin/AppointmentCardAdmin";

const AppointmentAdmin = () => {
const navigate = useNavigate();
const [appointments, setAppointments] = useState([]);
useEffect(() => {
  const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  console.log("imprimiendo cita: ", savedAppointments);
  setAppointments(savedAppointments);
}, []);

  return (
    <div className="my-appointments-container">
    <h1>Todas las Citas</h1>
    {appointments.length === 0 ? (
      <h3>No hay citas agendadas</h3>
    ) : (
      <div className="appointments-list">
        {appointments.map((appointment) => (
          <AppointmentCardAdmin
            key={appointment.id}
            appointment={appointment}
          />
        ))}
      </div>
    )}
      <button className="boton-salir" onClick={() => navigate("/admin")}>
      <i className="fas fa-times"></i></button>
      <img id="decoracion-image-top-left" src={Decoracion} alt="Decoracion" />

    </div>
    
  );
};

export default AppointmentAdmin;
