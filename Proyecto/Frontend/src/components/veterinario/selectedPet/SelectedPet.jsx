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
      <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />

      <div className="profile-image-container-vet">
        {appointmentData.petImage ? (
          <img
            src={appointmentData.petImage}
            alt={appointmentData.pet.name}
            className="profile-image-vet"
          />
        ) : (
          <FaPaw className="pet-iconVet" />
        )}

        <div className="form-group-vet">
          <h1>{appointmentData.pet.name}</h1>
        </div>

        <div className="service-vet">
          <h2>Servicio: {appointmentData.service}
            <br /> Descripción: {appointmentData.description}</h2>
          <h2></h2>
        </div>

      </div >

      <div className="info-grid-vet">
        <div className="info-box-vet">
          <label>Especie</label>
          <label>{petData.species}</label>
        </div>

        <div className="info-box-vet">
          <label>Edad</label>
          <label>{petData.age}</label>
        </div>

        <div className="info-box-vet">
          <label>Género</label>
          <div className="data">
            {petData.gender === 'male' ? (
              <i className="fas fa-mars male-icon"></i>
            ) : petData.gender === 'female' ? (
              <i className="fas fa-venus female-icon"></i>
            ) : null}
          </div>
        </div>

        <div className="info-box-vet">
          <label>Raza</label>
          <label>{petData.breed}</label>
        </div>

        <div className="info-box-vet">
          <label>Peso</label>
          <label>{petData.weight}</label>
        </div>
      </div>

      <form action="" className="form-vet" onSubmit={handleSubmit}>

        <div className="form1-group-vet">
          <label>Notas</label>
          <textarea
            id="notes"
            className="notes-box"
            value={medicalRecordData.notes}
            onChange={handleInputChange}
            placeholder="Notas adicionales"
          ></textarea>
        </div>

        <div className="form1-group-vet">
          <label>Tratamiento</label>
          <textarea
            id="treatment"
            className="treatment-box"
            value={medicalRecordData.treatment}
            onChange={handleInputChange}
            placeholder="Escribir tratamiento para la mascota"
          ></textarea>
        </div>

        <div className="button-group-vet">
          <button type="button" className="exit-button-vet" onClick={() => navigate("/citas-veterinario")}>
            <i className="fas fa-sign-out-alt"></i> Salir
          </button>
          <button type="submit" className="save-button-vet">
            <i className="fas fa-save"></i> Guardar perfil
          </button>
          <button type="button" className="btn-vet-assign">Asignar Cita</button>
          <button type="button" className="btn-vet-add-vaccine">Añadir Vacuna</button>
        </div>
      </form>
    </div>
  );
};

export default SelectedPet;
