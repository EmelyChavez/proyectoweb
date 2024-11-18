import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyPet.css";
import PetCard from "../petCard/PetCard";
import Decoracion from "../../assets/decoracion.png";

const MyPet = () => {
const navigate = useNavigate();
const [pets, setPets] = useState([]);

  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    setPets(savedPets);
  }, []);

  const deletePet = (petId) => {
    const updatedPets = pets.filter((pet) => pet.id !== petId);
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
  };

  const viewVaccinationCard = (petId) => {
    navigate(`/tarjeta-vacunas/${petId}`); // Navega a la página de tarjeta de vacunas
  };
  return (
    <div className="my-pet-container">
      <h1 className="titulo">Mis Mascotas</h1>
      {pets.length === 0 ? (
        <h3>No hay mascotas registradas</h3>
      ) : (
        <div className="pet-list">
          {pets.map((pet) => (
            <PetCard
              key={pet.id}
              pet={pet}
              onDelete={deletePet}
              onViewVaccinationCard={viewVaccinationCard}
            />
          ))}
        </div>
      )}
      <button className="close-btn" onClick={() => navigate("/sobre-nosotros")}>
      <i className="fas fa-times"></i> { }
      </button>
      <img id="decoracion-image" src={Decoracion} alt="Decoracion" />

    </div>
    
  );
};

export default MyPet;
