import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Decoracion from "../../../assets/decoracion.png";
import editImage from "../../../assets/EditarMascota.jpg";
import "./SelectedPet.css";
import SuccessModal from "../../../modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../modals/ErrorModal/ErrorModal"; // Importa el modal de error

export const SelectedPet = () => {
  const navigate = useNavigate();
  const { appointmentId } = useParams();

  const [petData, setPetData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [medicalRecordData, setMedicalRecordData] = useState({
    notes: "",
    treatment: "",
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
      setIsErrorModalOpen(true);
      return;
    }
    const newMedicalRecord = {
      ...medicalRecordData,
      id: crypto.randomUUID(),
      petId: appointmentData.pet.id,
      service: appointmentData.service,
      description: appointmentData.description,
      date: appointmentData.date,
      time: appointmentData.time,
    };

    const savedMedicalRecords = JSON.parse(localStorage.getItem("medicalRecords")) || [];
    localStorage.setItem("medicalRecords", JSON.stringify([...savedMedicalRecords, newMedicalRecord]));

    console.log(newMedicalRecord);
    setIsModalOpen(true);

  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/citas-veterinario");
  };
  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
  };
  if (!appointmentData) {
    return <h2>No se encontró información de esta mascota.</h2>;
  }

  return (
    <div className="selected-pet-container">
      <h1 className="title">Información de la Mascota</h1>
      <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />

      <div className="profile-image-container-vet">
        <div className="pet-photo">
        {appointmentData.petImage ? (
          <img
            src={appointmentData.petImage}
            alt={appointmentData.pet.name}
            className="profile-image-vet"
          />
        ) : (
          <img
            src={editImage}
            alt={appointmentData.pet.name}
            className="profile-image-vet"
          />
        )}
        </div>

        <div className="form-group-vet">
          <h1>{appointmentData.pet.name}</h1>
          <div className="service-vet">
            <h2 className="groupvet">Servicio</h2>
            <h2 className="infosp">
              {appointmentData.service}
            </h2>
            <h2 className="groupvet">Descripción</h2>
            <h2 className="infosp">
              {appointmentData.description}
            </h2>
          </div>
        </div>



      </div >

      <div className="info-complete-info">
        <div className="info-grid-vet">
          <div className="info-box-vet">
            <label >Especie</label>
            <label className="datasp">{petData.species}</label>
          </div>

          <div className="info-box-vet">
            <label>Edad</label>
            <label className="datasp">{petData.age}</label>
          </div>

          <div className="info-box-vet">
            <label>Género</label>
            <div className="datasp">
              {petData.gender === 'male' ? (
                <i className="fas fa-mars male-icon"></i>
              ) : petData.gender === 'female' ? (
                <i className="fas fa-venus female-icon"></i>
              ) : null}
            </div>
          </div>
        </div>
        <div className="raza-peso-box">
          <div className="info-box-vet">
            <label>Raza</label>
            <label className="datasp">{petData.breed}</label>
          </div>

          <div className="info-box-vet">
            <label>Peso (kg)</label>
            <label className="datasp">{petData.weight}</label>
          </div>
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
            <i className="fas fa-save"></i> Guardar consulta
          </button>
          <button
            type="button"
            className="btn-vet-assign"
            onClick={() => navigate(`/asignar-cita/${appointmentData.id}`)}
          >Asignar Cita
          </button>
          <button
            type="button"
            className="btn-vet-add-vaccine"
            onClick={() => navigate(`/asignar-vacuna/${petData.id}/${appointmentData.id}`)}
          >Añadir Vacuna
          </button>
        </div>
      </form>
      <SuccessModal isOpen={isModalOpen} onClose={handleModalClose} />
      <ErrorModal isOpen={isErrorModalOpen} onClose={handleErrorModalClose} />


    </div>
  );
};

export default SelectedPet;
