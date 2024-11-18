import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyAppointment.css";
import Decoracion from "../../assets/decoracion.png";

const MyAppointment = () => {
const navigate = useNavigate();
  return (
    <div className="mis-citas-container">
      <h1 className="titulo">Mis Citas</h1>
      <h3>No hay citas registradas</h3>
      <button className="boton-salir" onClick={() => navigate("/sobre-nosotros")}>
        Salir</button>
      <img id="decoracion-image-left" src={Decoracion} alt="Decoracion" />

    </div>
    
  );
};

export default MyAppointment;
