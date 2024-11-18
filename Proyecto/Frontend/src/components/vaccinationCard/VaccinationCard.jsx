import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaPaw } from "react-icons/fa"; // Importamos el ícono de react-icons
import "./VaccinationCard.css";

const VaccinationCard = () => {
  const navigate = useNavigate();
  const { petId } = useParams(); // Obtenemos el ID de la mascota desde la URL
  const [petData, setPetData] = useState(null);

  useEffect(() => {
    // Obtenemos las mascotas desde el localStorage
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    // Buscamos la mascota específica
    const pet = savedPets.find((p) => p.id === petId);
    setPetData(pet || null); // Si no se encuentra la mascota, dejamos el estado en null
  }, [petId]);

  if (!petData) {
    return <h2>No se encontró información de esta mascota.</h2>; // Mensaje si no hay datos
  }

  return (
    <div className="vaccination-card">
      <h1 className="title">Tarjeta de Vacunación</h1>
      <div className="pet-details">
        <div className="pet-photo">
          {/* Si no hay imagen, mostramos un ícono de huella */}
          {petData.image ? (
            <img
              src={petData.image}
              alt={petData.name}
              className="pet-image"
            />
          ) : (
            <FaPaw className="pet-icon" />
          )}
          <h2>{petData.name}</h2>
        </div>
        <div className="details-container">
          <div className="detail">
            <p>Especie</p>
            <span>{petData.species}</span>
          </div>
          <div className="detail">
            <p>Edad</p>
            <span>{petData.age}</span>
          </div>
          <div className="detail">
            <p>Género</p>
            <span>{petData.gender}</span>
          </div>
        </div>
        <p className="breed">
          <strong>Raza:</strong> {petData.breed} <br />
          <strong>Peso (kg):</strong> {petData.weight}
        </p>
      </div>
      <div className="vaccination-info">
        <div className="vaccine-item">
          <p>Vacuna</p>
          <p>Fecha</p>
        </div>
        {petData.vaccines?.length > 0 ? (
          petData.vaccines.map((vaccine, index) => (
            <div className="vaccine-item" key={index}>
              <p>{vaccine.name}</p>
              <p>{vaccine.date}</p>
            </div>
          ))
        ) : (
          <p>No hay vacunas registradas.</p>
        )}
      </div>
      <button className="close-btn" onClick={() => navigate("/mis-mascotas")}>
        Cerrar
      </button>
    </div>
  );
};

export default VaccinationCard;
