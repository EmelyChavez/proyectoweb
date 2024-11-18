import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyPet.css";
import Decoracion from "../../assets/decoracion.png";

const MyAppointment = () => {
const navigate = useNavigate();
  return (
    <div className="my-pet-container">
      <h1 className="titulo">Mis Mascotas</h1>
      <h3>No hay mascotas registradas</h3>
      <button className="close-btn" onClick={() => navigate("/sobre-nosotros")}>
        Salir</button>
      <img id="decoracion-image-left" src={Decoracion} alt="Decoracion" />

    </div>
    
  );
};

export default MyAppointment;
