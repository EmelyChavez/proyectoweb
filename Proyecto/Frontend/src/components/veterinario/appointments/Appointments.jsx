import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointments.css";
import Decoracion from "../../../assets/decoracion.png";
import AppointmentsCard from "../appointmentsCard/AppointmentsCard";

const Appointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);

  }, []);

  const selectedPet = (appointmentId) => {
    navigate(`/informacion-mascota/${appointmentId}`);
  };

  return (
    <div className="my-appointments-container1">
      <h1>Citas Asignadas</h1>
      {appointments.length === 0 ? (
        <h3>No hay citas agendadas</h3>
      ) : (
        <div className="appointments-list1">
          {appointments.map((appointment) => (
            <AppointmentsCard
              key={appointment.id}
              appointment={appointment}
              onSelectedPet={selectedPet}
            />
          ))}
        </div>
      )}
      <button className="boton-salir1" onClick={() => navigate("/veterinario")}>
        <i className="fas fa-times"></i>
      </button>
      <img id="decoracion-image-top-left" src={Decoracion} alt="Decoracion" />

    </div>

  );
};

export default Appointments;
