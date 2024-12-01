import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Decoracion from "../../../assets/decoracion.png";
import editImage from "../../../assets/EditarMascota.jpg";
import "./VaccinationCard.css";

const VaccinationCard = () => {
  const navigate = useNavigate();
  const { petId } = useParams();
  const [petData, setPetData] = useState(null);

  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    const pet = savedPets.find((p) => p.id === petId);
    setPetData(pet || null);
  }, [petId]);

  if (!petData) {
    return <h2>No se encontró información de esta mascota.</h2>;
  }

  return (
    <div className="vaccination-card">
      <h1 className="title">Tarjeta de Vacunación</h1>

      <div className="details-wrapper">

        <div className="pet-details">

          <div className="pet-photo">
            { }
            {petData.image ? (
              <img
                src={petData.image}
                alt={petData.name}
                className=" vaccination-image"
              />
            ) : (
              <img
                src={editImage}
                alt={petData.name}
                className="vaccination-image"
              />
            )}
            <h1>{petData.name}</h1>
          </div>

          <h3 className="breed">
            <strong>Raza:</strong> {petData.breed} <br />
            <strong>Peso (kg):</strong> {petData.weight}
          </h3>

        </div>

        <div className="vaccination-info">
          <div className="details-container">
            <div className="detail">
              <h2>Especie</h2>
              <h2 className="data">{petData.species}</h2>
            </div>
            <div className="detail">
              <h2>Edad</h2>
              <h2 className="data">{petData.age}</h2>
            </div>
            <div className="detail">
              <h2>Género</h2>
              <div className="data">
                {petData.gender === 'male' ? (
                  <i className="fas fa-mars male-icon"></i>
                ) : petData.gender === 'female' ? (
                  <i className="fas fa-venus female-icon"></i>
                ) : null}
              </div>
            </div>


          </div>

          <div className="vaccination-info">
            {/* Encabezado con bordes */}
            <div className="vaccine-header">
              <h2>Vacuna</h2>
              <h2>Fecha</h2>
            </div>

            {/* Lista de vacunas con scroll */}
            <div className="vaccination-list">
              {petData.vaccines?.length > 0 ? (
                petData.vaccines.map((vaccine, index) => (
                  <div className="vaccine-item" key={index}>
                    <span className="data">{vaccine.name}</span>
                    <span className="data">{vaccine.date}</span>
                  </div>
                ))
              ) : (
                <h2 className="data">No hay vacunas registradas.</h2>
              )}
            </div>
          </div>


        </div>

      </div>

      <button className="close-button" onClick={() => navigate("/mis-mascotas")}>
        <i className="fas fa-times"></i>
      </button>

      <img id="decoracion-image-left" src={Decoracion} alt="Decoracion" />
    </div>
  );
};

export default VaccinationCard;
