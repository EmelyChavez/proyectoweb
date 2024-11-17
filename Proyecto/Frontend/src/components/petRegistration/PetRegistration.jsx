import React from "react";
import "./PetRegistration.css";
import editImage from "../../assets/EditarMascota.png";
import Decoracion from "../../assets/decoracion.png";

const PetRegistration = () => {
  const [gender, setGender] = React.useState("");

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };


  return (
    <div className="pet-registration-container">

      <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />

      <h1 className="title">Registrar perfil de mascota</h1>

      <div className="profile-image-container">
        <img src={editImage} alt="Editar mascota" className="profile-image" />
        <button className="edit-button">
          <i className="fas fa-edit"></i>
        </button>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" type="text" />
        </div>
      </div>

      <div className="info-grid">
        <div className="info-box">
          <label htmlFor="especie">Especie</label>
          <input id="especie" type="text" />
        </div>

        <div className="info-box">
          <label htmlFor="edad">Edad</label>
          <div className="age-container">
            <input id="edad" placeholder="0" type="number" min="0" />
            <select id="unidad" className="age-unit">
              <option value="años">Años</option>
              <option value="meses">Meses</option>
            </select>
          </div>
        </div>

        <div className="info-box">
          <label>Género</label>
          <div className="gender-selection">
            <button
              type="button"
              className={`gender-button ${gender === "male" ? "selected" : ""}`}
              id="male"
              onClick={() => handleGenderSelect("male")}
              aria-label="Macho"
            >
              <i className="fas fa-mars"></i>
            </button>
            <button
              type="button"
              className={`gender-button ${gender === "female" ? "selected" : ""}`}
              id="female"
              onClick={() => handleGenderSelect("female")}
              aria-label="Hembra"
            >
              <i className="fas fa-venus"></i>
            </button>
          </div>
        </div>


      </div>

      <h2 className="subtitle">Información Adicional</h2>


      <form className="form">
        <div className="form-group">
          <label htmlFor="raza">Raza</label>
          <input id="raza" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="peso">Peso (kg)</label>
          <input id="peso" type="number" placeholder="0" min={0} step="0.1" />
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
    </div>
  );
};

export default PetRegistration;
