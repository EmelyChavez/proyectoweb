import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Decoracion from "../../../assets/decoracion.png";
import editImage from "../../../assets/EditarMascota.jpg";
import "./RecordCardAdmin.css";
import SuccessModal from "../../../modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../modals/ErrorModal/ErrorModal"; // Importa el modal de error

const RecordCardAdmin = () => {
    const navigate = useNavigate();
    const { recordId } = useParams();

    const [medicalRecord, setMedicalRecord] = useState(null);
    const [petData, setPetData] = useState(null);

    useEffect(() => {
        const savedMedicalRecords = JSON.parse(localStorage.getItem("medicalRecords")) || [];
        const savedPets = JSON.parse(localStorage.getItem("pets")) || [];

        const record = savedMedicalRecords.find((r) => r.id === recordId);
        setMedicalRecord(record || null);

        if (record) {
            const pet = savedPets.find((p) => p.id === record.petId);
            setPetData(pet || null);
        }

    }, [recordId]);

    const handleModalClose = () => {
        setIsModalOpen(false);
        navigate("/citas-veterinario");
    };

    const handleErrorModalClose = () => {
        setIsErrorModalOpen(false);
    };

    if (!medicalRecord || !petData) {
        return <h2>No se encontró información de este historial médico.</h2>;
    }

    return (
        <div className="recordCard-container-adminCard">
            <h1 className="title-adminCard">Detalles del Historial Médico</h1>
            <img id="decoracion-image-top-right-adminCard" src={Decoracion} alt="Decoracion" />

            <div className="image-record-card-adminCard">
                <div className="pet-photo-adminCard">
                    {petData.image ? (
                        <img
                            src={petData.image}
                            alt={petData.name}
                            className="profile-image-record-adminCard"
                        />
                    ) : (
                        <img
                            src={editImage}
                            alt={petData.name}
                            className="profile-image-record-adminCard"
                        />
                    )}
                </div>

                <div className="form-group-record-adminCard">
                    <h1>{petData.name}</h1>
                    <div className="service-record-adminCard">
                        <h2 className="grouprecord-adminCard">Servicio</h2>
                        <h2 className="infospRC-adminCard">{medicalRecord.service}</h2>
                        <h2 className="grouprecord-adminCard">Descripción</h2>
                        <h2 className="infospRC-adminCard">{medicalRecord.description}</h2>
                        <h2 className="grouprecord-adminCard">Fecha</h2>
                        <h2 className="infospRC-adminCard">{medicalRecord.date}</h2>
                        <h2 className="grouprecord-adminCard">Hora</h2>
                        <h2 className="infospRC-adminCard">{medicalRecord.time}</h2>
                    </div>
                </div>
            </div>

            <div className="info-complete-record-adminCard">
                <div className="info-grid-record-adminCard">
                    <div className="info-box-record-adminCard">
                        <label>Especie</label>
                        <label className="dataRC-adminCard">{petData.species}</label>
                    </div>
                    <div className="info-box-record-adminCard">
                        <label>Edad</label>
                        <label className="dataRC-adminCard">{petData.age}</label>
                    </div>
                    <div className="info-box-record-adminCard">
                        <label>Género</label>
                        <div className="dataRC-adminCard">
                            {petData.gender === 'male' ? (
                                <i className="fas fa-mars male-icon-adminCard"></i>
                            ) : petData.gender === 'female' ? (
                                <i className="fas fa-venus female-icon-adminCard"></i>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="raza-peso-box-adminCard">
                    <div className="info-box-record-adminCard">
                        <label>Raza</label>
                        <label className="dataRC-adminCard">{petData.breed}</label>
                    </div>
                    <div className="info-box-record-adminCard">
                        <label>Peso (kg)</label>
                        <label className="dataRC-adminCard">{petData.weight}</label>
                    </div>
                </div>
            </div>

            <div className="form-record-adminCard">
                <div className="form1-group-record-adminCard">
                    <label>Notas</label>
                    <textarea
                        readOnly
                        className="treatment-box-adminCard"
                        value={medicalRecord.treatment}
                    ></textarea>
                </div>

                <div className="form1-group-record-adminCard">
                    <label>Tratamiento</label>
                    <textarea
                        readOnly
                        className="treatment-box-adminCard"
                        value={medicalRecord.treatment}
                    ></textarea>
                </div>

                <div className="button-group-record-adminCard">
                    <button type="button" className="exit-button-record-adminCard" onClick={() => navigate(`/historial-mascota-admin/${petData.id}`)}>
                        <i className="fas fa-sign-out-alt"></i> Salir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecordCardAdmin;
