import React from "react";
import "./PetRegistration.css";
import editImage from "../../assets/EditarMascota.png";
import Decoracion from "../../assets/decoracion.png";

const PetRegistration = () => {
  return (
    <div className="pet-registration-container">
      <div className="profile-image-container">
        <img src={editImage} alt="Editar mascota" className="profile-image" />
        <button className="edit-button">
          <i className="fas fa-edit"></i>
        </button>
      </div>

      <div className="info-grid">
        <div className="info-box">
          <label htmlFor="especie">Especie</label>
          <input id="especie" type="text" placeholder="Especie" />
        </div>
        <div className="info-box">
          <label htmlFor="edad">Edad</label>
          <input id="edad" type="number" placeholder="Edad" />
        </div>
        <div className="info-box">
          <label htmlFor="genero">Género</label>
          <input id="genero" type="text" placeholder="Género" />
        </div>
      </div>

      <h1 className="title">Registrar perfil de mascota</h1>
      <h2 className="subtitle">Información Adicional</h2>

      <form className="form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" type="text" placeholder="Nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="raza">Raza</label>
          <input id="raza" type="text" placeholder="Raza" />
        </div>
        <div className="form-group">
          <label htmlFor="peso">Peso (kg)</label>
          <input id="peso" type="text" placeholder="Peso (kg)" />
        </div>

        <div className="button-group">
          <button type="button" className="exit-button">
            <i className="fas fa-sign-out-alt"></i> Salir
          </button>
          <button type="submit" className="save-button">
            <i className="fas fa-save"></i> Guardar perfil
          </button>
        </div>
      </form>
      <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />
    </div>
  );
};

export default PetRegistration;
