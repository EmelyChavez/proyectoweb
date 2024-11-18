import React from "react";
import "./PetCard.css";

const PetCard = ({ pet, onDelete, onViewVaccinationCard }) => {
  return (
    <div className="pet-card">
      <img src={pet.image || "https://via.placeholder.com/150"} alt={pet.name} className="pet-image" />
      <div className="pet-info">
        <h3 className="pet-name">{pet.name}</h3>
        <p className="pet-breed">Raza: {pet.breed}</p>
      </div>
      <div className="pet-actions">
        <button className="btn delete-btn" onClick={() => onDelete(pet.id)}>
          <i className="fas fa-trash"></i>
        </button>
        <div className="right-container">
          <button className="btn view-btn" onClick={() => onViewVaccinationCard(pet.id)}>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
