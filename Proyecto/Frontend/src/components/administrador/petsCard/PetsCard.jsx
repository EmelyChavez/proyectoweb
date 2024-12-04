import React from "react";
import "./PetsCard.css";

const PetsCard = ({ pet, onDelete, onViewVaccinationCard, onHistory }) => {
    return (
        <div className="pet-admin-card">
            <img src={pet.image || "https://via.placeholder.com/150"} alt={pet.name} className="pet-admin-image" />
            <div className="pet-admin-info">
                <h3 className="pet-admin-name">{pet.name}</h3>
                <p className="pet-admin-breed">Raza: {pet.breed}</p>
            </div>
            <div className="pet-admin-actions">
                <button className="history-btn-pet-admin" onClick={() => onHistory(pet.id)}>
                    <i className="fas fa-history"></i>
                </button>
                <div className="right-container-pet-admin">
                    <button className="btn view-btnpet-admin" onClick={() => onViewVaccinationCard(pet.id)}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PetsCard;