import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import Decoracion from "../../../assets/decoracion.png";
import "./SelectedPet.css";

export const SelectedPet = () => {
  const navigate = useNavigate();
  const { appointmentId } = useParams();

  const [petData, setPetData] = useState(null);//cambiar
  const [appointmentData, setAppointmentData] = useState(null);//cambiar

  const [medicalRecords, setMedicalRecords] = useState([]);
  const [medicalRecordData, setMedicalRecordData] = useState({
    notes: "",
    treatment: "",
    idAppointment: "",
  });
  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const appointment = savedAppointments.find((a) => a.id === appointmentId);
    setAppointmentData(appointment || null);

    if (appointment) {
      const pet = savedPets.find((p) => p.id === appointment.pet.id);
      console.log("imprimiendo mascota: ", pet);
      setPetData(pet || null);

      setMedicalRecordData((prevData) => ({
        ...prevData,
        idAppointment: appointmentId,
      }));
    }

  }, [appointmentId]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setMedicalRecordData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { notes, treatment } = medicalRecordData;
    if (!notes || !treatment) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
    const newMedicalRecord = {
      ...medicalRecordData,
      id: crypto.randomUUID(),
    };

    const savedMedicalRecords = JSON.parse(localStorage.getItem("medicalRecords")) || [];
    localStorage.setItem("medicalRecords", JSON.stringify([...savedMedicalRecords, newMedicalRecord]));

    console.log(newMedicalRecord);
    alert("Historial agregado correctamente.");
    navigate("/citas-veterinario");
  }

  if (!appointmentData) {
    return <h2>No se encontró información de esta mascota.</h2>;
  }

  return (
    <div className="selected-pet-container">
      <h1 className="title">Información de la Mascota</h1>

      <form action="" className="main-box-vet" onSubmit={handleSubmit}>
        <div className="pet-photo-vet">
          {appointmentData.petImage ? (
            <img
              src={appointmentData.petImage}
              alt={appointmentData.pet.name}
              className="selectedPet-image"
            />
          ) : (
            <FaPaw className="pet-iconVet" />
          )}

          <h1>{appointmentData.pet.name}</h1>
        </div>

        <div className="info-box-vet species-vet">
          <h3>Especie</h3>
          <h3>{petData.species}</h3>
        </div>

        <div className="info-box-vet age-vet">
          <h3>Edad</h3>
          <h3>{petData.age}</h3>
        </div>

        <div className="info-box-vet gender-vet">
          <h3>Género</h3>
          <div className="data">
            {petData.gender === 'male' ? (
              <i className="fas fa-mars male-icon"></i>
            ) : petData.gender === 'female' ? (
              <i className="fas fa-venus female-icon"></i>
            ) : null}
          </div>
        </div>

        <p className="">
          <strong>Raza:</strong> {petData.breed} <br />
          <strong>Peso (kg):</strong> {petData.weight} <br />
          <strong>Servicio:</strong> {appointmentData.service}

        </p>

        <div className="description-box-vet">
          <h3>Descripción</h3>
          <p>
            {appointmentData.description}
          </p>
        </div>

        <div className="notes-section">
          <h3>Notas</h3>
          <textarea
            id="notes"
            className="notes-box"
            value={medicalRecordData.notes}
            onChange={handleInputChange}
            placeholder="Notas adicionales"
          ></textarea>        </div>

        <div className="treatment-section">
          <h3>Tratamiento</h3>
          <textarea
            id="treatment"
            className="treatment-box"
            value={medicalRecordData.treatment}
            onChange={handleInputChange}
            placeholder="Escribir tratamiento para la mascota"
          ></textarea>
        </div>

        <button type="button" className="btn-vet assign">Asignar Cita</button>
        <button type="submit" className="btn-vet save">Guardar</button>
        <button type="button" className="btn-vet add-vaccine">Añadir Vacuna</button>
      </form>


      <button className="close-btnVet-pet" onClick={() => navigate("/citas-veterinario")}>
        <i className="fas fa-times"></i>
      </button>

      <img id="decoracion-image-left" src={Decoracion} alt="Decoracion" />
    </div>
  );
};

export default SelectedPet;
