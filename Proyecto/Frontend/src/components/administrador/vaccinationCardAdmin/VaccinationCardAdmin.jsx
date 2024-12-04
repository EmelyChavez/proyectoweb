import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Decoracion from "../../../assets/decoracion.png";
import editImage from "../../../assets/EditarMascota.jpg";
import "./VaccinationCardAdmin.css";

const VaccinationCardAdmin = () => {
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
    <div className="vaccination-card-admin-card">
      <h1 className="title-admin-card">Tarjeta de Vacunación</h1>

      <div className="details-wrapper-admin-card">
        <div className="pet-details-admin-card">
          <div className="pet-photo-admin-card">
            {petData.image ? (
              <img
                src={petData.image}
                alt={petData.name}
                className="vaccination-image-admin-card"
              />
            ) : (
              <img
                src={editImage}
                alt={petData.name}
                className="vaccination-image-admin-card"
              />
            )}
            <h1>{petData.name}</h1>
          </div>

          <h3 className="breed-admin-card">
            <strong>Raza:</strong> {petData.breed} <br />
            <strong>Peso (kg):</strong> {petData.weight}
          </h3>
        </div>

        <div className="vaccination-info-admin-card">
          <div className="details-container-admin-card">
            <div className="detail-admin-card">
              <h2>Especie</h2>
              <h2 className="data-admin-card">{petData.species}</h2>
            </div>
            <div className="detail-admin-card">
              <h2>Edad</h2>
              <h2 className="data-admin-card">{petData.age}</h2>
            </div>
            <div className="detail-admin-card">
              <h2>Género</h2>
              <div className="data-admin-card">
                {petData.gender === "male" ? (
                  <i className="fas fa-mars male-icon-admin-card"></i>
                ) : petData.gender === "female" ? (
                  <i className="fas fa-venus female-icon-admin-card"></i>
                ) : null}
              </div>
            </div>
          </div>

          <div className="vaccination-info-admin-card">
            <div className="vaccine-header-admin-card">
              <h2>Vacuna</h2>
              <h2>Fecha</h2>
            </div>

            <div className="vaccination-list-admin-card">
              {petData.vaccines?.length > 0 ? (
                petData.vaccines.map((vaccine, index) => (
                  <div className="vaccine-item-admin-card" key={index}>
                    <span className="data-admin-card">{vaccine.name}</span>
                    <span className="data-admin-card">{vaccine.date}</span>
                  </div>
                ))
              ) : (
                <h2 className="data-admin-card">No hay vacunas registradas.</h2>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        className="close-button-admin-card"
        onClick={() => navigate("/mascotas-admin")}
      >
        <i className="fas fa-times"></i>
      </button>

      <img
        id="decoracion-image-left-admin-card"
        src={Decoracion}
        alt="Decoracion"
      />
    </div>
  );
};

export default VaccinationCardAdmin;
