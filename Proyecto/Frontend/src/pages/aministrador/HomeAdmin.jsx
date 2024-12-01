import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./HomeAdmin.css";

const HomeAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
        <div className="top-right-buttons">
            <button className="btns">
                <span>Veterinarios</span>
            </button>
            <button className="btns">
                <span>Mascotas</span>
            </button>
            <button className="btns">
                <span>Citas</span>
            </button>
            <button className="logout-btns">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
            </button>
            <div className="avatars">
                <i className="fas fa-user-alt"></i>
            </div>
        </div>
        <div className="logo-section">
            <img src={logo} alt="Logo" class="logo-image" />
            <h1 className="welcome-text">Usuario Administrador</h1>
        </div>
    </div>
  );
};

export default HomeAdmin;
