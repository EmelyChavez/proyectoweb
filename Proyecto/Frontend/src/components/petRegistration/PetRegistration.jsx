import React from "react";
import "./PetRegistration.css";
import editImage from "../assets/editarmascota-1.png";

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
        <div className="info-box">Especie</div>
        <div className="info-box">Edad</div>
        <div className="info-box">Género</div>
      </div>

      <h1 className="title">Registrar perfil de mascota</h1>
      <h2 className="subtitle additional-info">Información Adicional</h2>

      <label className="label" htmlFor="nombre">
        Nombre
      </label>
      <input id="nombre" type="text" className="input-field" />

      <label className="label" htmlFor="raza">
        Raza
      </label>
      <input id="raza" type="text" className="input-field" />

      <label className="label" htmlFor="peso">
        Peso (kg)
      </label>
      <input id="peso" type="text" className="input-field" />

      <button className="save-button">
        <i className="fas fa-save"></i> Guardar perfil
      </button>

      <button className="exit-button">
        <i className="fas fa-sign-out-alt"></i> Salir
      </button>

      <div className="decorative-circle large">
        <i className="fas fa-paw"></i>
      </div>

      <div className="decorative-circle small green"></div>
      <div className="decorative-circle small blue"></div>
    </div>
  );
};

export default PetRegistration;
