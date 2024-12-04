import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pets.css";
import PetsCard from "../petsCard/PetsCard";
import Decoracion from "../../../assets/decoracion.png";

const Pets = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    setPets(savedPets);
  }, []);

  const viewVaccinationCardAdmin = (petId) => {
    navigate(`/tarjeta-vacunas-admin/${petId}`);
  };
  const onHistoryAdmin = (petId) => {
    navigate(`/historial-mascota-admin/${petId}`);
  };
  return (
    <div className="pet-admin-container">
      <h1 className="titulo-pet-admin">Mascotas</h1>
      {pets.length === 0 ? (
        <h3>No hay mascotas registradas</h3>
      ) : (
        <div className="pet-admin-list">
          {pets.map((pet) => (
            <PetsCard
              key={pet.id}
              pet={pet}
              onViewVaccinationCard={viewVaccinationCardAdmin}
              onHistory={onHistoryAdmin}
            />
          ))}
        </div>
      )}
      <button className="close-btn-pet-admin" onClick={() => navigate("/admin")}>
        <i className="fas fa-times"></i> { }
      </button>
      <img id="decoracion-image-top-left" src={Decoracion} alt="Decoracion" />

    </div>

  );
};

export default Pets;