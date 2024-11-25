import React, { useState } from "react";
import "./PetRegistration.css";
import { useNavigate } from "react-router-dom";
import editImage from "../../../assets/EditarMascota.jpg";
import Decoracion from "../../../assets/decoracion.png";

const PetRegistration = () => {
  const navigate = useNavigate();
  const [gender, setGender] = React.useState("");
  const [petImage, setPetImage] = useState(null);

  const [petData, setPetData] = useState({
    name: "",
    species: "",
    age: "",
    ageUnit: "años",
    breed: "",
    weight: "",
    image: petImage,
  });


  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPetData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageBase64 = reader.result;
        setPetImage(imageBase64); 
        setPetData((prevData) => ({ ...prevData, image: imageBase64 }));
      };
  
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!petData.name || !petData.species || !petData.age || !gender || !petData.breed || !petData.weight /*|| !petData.image*/) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
  }

    const newPet = {
      ...petData,
      gender,
      id: crypto.randomUUID(),
    };

    const pets = JSON.parse(localStorage.getItem("pets")) || [];
    localStorage.setItem("pets", JSON.stringify([...pets, newPet]));

    navigate("/mis-mascotas");
  };


  return (
    <div className="pet-registration-container">
      <h1 className="title">Registrar Perfil De Mascota</h1>
      <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />


      <div className="profile-image-container">
        <img src={petData.image || editImage} alt="Editar mascota" className="profile-image" />

        <button className="edit-button" onClick={() => document.getElementById("image-input").click()}>
          <i className="fas fa-edit"></i>
        </button>

        <input
          id="image-input"
          type="file"
          onChange={handleImageChange}
          style={{ display: "none" }}
          accept="image/*"
        />

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input id="name" type="text" onChange={handleInputChange}/>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-box">
          <label htmlFor="species">Especie</label>
          <input id="species" type="text" onChange={handleInputChange}/>
        </div>

        <div className="info-box">
          <label htmlFor="edad">Edad</label>
          <div className="age-container">
            <input id="age" placeholder="0" type="number" min="0" onChange={handleInputChange}/>
            <select id="ageUnit" onChange={handleInputChange} className="age-unit">
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

      <form className="form" onSubmit={handleSubmit}>
        <h2 className="subtitle">Información Adicional</h2>
        <div className="form-group">
          <label htmlFor="breed">Raza</label>
          <input id="breed" type="text" onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="weight">Peso (kg)</label>
          <input id="weight" type="number" placeholder="0" min={0} step="0.1" onChange={handleInputChange}/>
        </div>

        <div className="button-group">
          <button type="button" className="exit-button" onClick={() => navigate("/sobre-nosotros")}>
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
