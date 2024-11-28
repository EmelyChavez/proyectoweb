import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./HomeVet.css";

const HomeVet = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo-section">
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
          />
          <h1 className="welcome-text">Bienvenido Dr. Fernando Díaz</h1>
        </div>

        <button className="assign-appointments-btn" onClick={() => navigate("/citas-veterinario")}>
          <span>Ver Citas Asignadas</span>
        </button>

        <button className="logout-btn">
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>

        <div className="avatar">
          <i className="fas fa-user-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default HomeVet;
