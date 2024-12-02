import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MedicalRecordList.css";
import hamster from "../../../assets/hamster.png";
import Decoracion from "../../../assets/decoracion.png";

const PetHistory = () => {
    const navigate = useNavigate();
    const { petId } = useParams();
    const [medicalRecords, setMedicalRecords] = useState([]);
    const [petName, setPetName] = useState("");

    useEffect(() => {
        const savedMedicalRecords = JSON.parse(localStorage.getItem("medicalRecords")) || [];
        const savedPets = JSON.parse(localStorage.getItem("pets")) || [];

        const filteredRecords = savedMedicalRecords.filter((a) => a.petId === petId);
        setMedicalRecords(filteredRecords);

        const pet = savedPets.find((p) => p.id === petId);
        setPetName(pet ? pet.name : "Mascota desconocida");
    }, [petId]);

    const handleRecordClick = (recordId) => {
        navigate(`/detalles-historial/${recordId}`);
    };

    return (
        <div className="medicalRecord-container">
            <h1>Historial Médico de {petName}</h1>
            <div className="history-card">
                 {medicalRecords.length > 0 ? (
                    <div className="history-list">
                        {medicalRecords.map((record) => (
                            <div
                                className="history-item"
                                key={record.id}
                                onClick={() => handleRecordClick(record.id)}>
                                <p><strong>Servicio:</strong> {record.service}</p>
                                <p><strong>Fecha:</strong> {record.date}</p>
                                <p><strong>Hora:</strong> {record.time}</p>
                                <p className="view-details">Ver detalles &rarr;</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-history-message">
                        <p>No hay historial médico para esta mascota.</p>
                    </div>
                )}
            </div>

            <img id="decoracion-image-bottom-left" src={Decoracion} alt="Decoracion" />
            <button 
            className="close-button-medicalRecord" 
            onClick={() => navigate("/citas-veterinario")}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
};

export default PetHistory;
