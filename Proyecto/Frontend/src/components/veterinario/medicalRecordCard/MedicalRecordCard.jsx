import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Decoracion from "../../../assets/decoracion.png";
import editImage from "../../../assets/EditarMascota.jpg";
import "./MedicalRecordCard.css";
import SuccessModal from "../../../modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../modals/ErrorModal/ErrorModal"; // Importa el modal de error

const MedicalRecordCard = () => {
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
        <div className="recordCard-container">
            <h1 className="title">Detalles del Historial Médico</h1>
            <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />

            <div className="image-record-card">
                <div className="pet-photo">
                    {petData.image ? (
                        <img
                            src={petData.image}
                            alt={petData.name}
                            className="profile-image-record"
                        />
                    ) : (
                        <img
                            src={editImage}
                            alt={petData.name}
                            className="profile-image-record"
                        />
                    )}
                </div>

                <div className="form-group-record">
                    <h1>{petData.name}</h1>
                    <div className="service-record">
                        <h2 className="grouprecord">Servicio</h2>
                        <h2 className="infospRC">
                            {medicalRecord.service}
                        </h2>
                        <h2 className="grouprecord">Descripción</h2>
                        <h2 className="infospRC">
                            {medicalRecord.description}
                        </h2>
                        <h2 className="grouprecord">Fecha</h2>
                        <h2 className="infospRC">
                            {medicalRecord.date}
                        </h2>
                        <h2 className="grouprecord">Hora</h2>
                        <h2 className="infospRC">
                            {medicalRecord.time}
                        </h2>
                    </div>
                </div>



            </div >

            <div className="info-complete-record">
                <div className="info-grid-record">
                    <div className="info-box-record">
                        <label >Especie</label>
                        <label className="dataRC">{petData.species}</label>
                    </div>

                    <div className="info-box-record">
                        <label>Edad</label>
                        <label className="dataRC">{petData.age}</label>
                    </div>

                    <div className="info-box-record">
                        <label>Género</label>
                        <div className="dataRC">
                            {petData.gender === 'male' ? (
                                <i className="fas fa-mars male-icon"></i>
                            ) : petData.gender === 'female' ? (
                                <i className="fas fa-venus female-icon"></i>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="raza-peso-box">
                    <div className="info-box-record">
                        <label>Raza</label>
                        <label className="dataRC">{petData.breed}</label>
                    </div>

                    <div className="info-box-record">
                        <label>Peso (kg)</label>
                        <label className="dataRC">{petData.weight}</label>
                    </div>
                </div>
            </div>

            <div className="form-record">
                <div className="form1-group-record">
                    <label>Notas</label>
                    <textarea
                        readOnly
                        className="treatment-box"
                        value={medicalRecord.treatment}
                    ></textarea>
                </div>

                <div className="form1-group-record">
                    <label>Tratamiento</label>
                    <textarea
                        readOnly
                        className="treatment-box"
                        value={medicalRecord.treatment}
                    ></textarea>
                </div>

                <div className="button-group-record">
                    <button type="button" className="exit-button-vet" onClick={() => navigate(`/historial-mascota/${petData.id}`)}>
                        <i className="fas fa-sign-out-alt"></i> Salir
                    </button>
                </div>
            </div>          


        </div>
    );
};

export default MedicalRecordCard;
