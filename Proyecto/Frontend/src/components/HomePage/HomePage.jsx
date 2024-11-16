import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo.png";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <nav className="navbar-links">
          <a href="#sobre-nosotros">Sobre Nosotros</a>
          <a href="#registrar-mascota">Registrar Mascota</a>
          <a href="#mis-mascotas">Mis Mascotas</a>
          <a href="#mis-citas">Mis Citas</a>
          <a href="#agendar-cita">Agendar Cita</a>
        </nav>
        <div className="navbar-user">
          <button className="logout-button">Logout</button>
          <i className="fas fa-user user-icon"></i>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
