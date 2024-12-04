import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./RecordListAdmin.css";
import Decoracion from "../../../assets/decoracion.png";

const PetHistoryAdmin = () => {
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
        navigate(`/detalles-historial-admin/${recordId}`);
    };

    return (
        <div className="medicalRecord-container-card-admin">
            <h1>Historial Médico de {petName}</h1>
            <div className="history-card-card-admin">
                {medicalRecords.length > 0 ? (
                    <div className="history-list-card-admin">
                        {medicalRecords.map((record) => (
                            <div
                                className="history-item-card-admin"
                                key={record.id}
                                onClick={() => handleRecordClick(record.id)}>
                                <p><strong>Servicio:</strong> {record.service}</p>
                                <p><strong>Fecha:</strong> {record.date}</p>
                                <p><strong>Hora:</strong> {record.time}</p>
                                <p className="view-details-card-admin">Ver detalles &rarr;</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-history-message-card-admin">
                        <p>No hay historial médico para esta mascota.</p>
                    </div>
                )}
            </div>

            <img id="decoracion-image-bottom-left" src={Decoracion} alt="Decoracion" />
            <button 
                className="close-button-medicalRecord-card-admin" 
                onClick={() => navigate("/mascotas-admin")}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
};

export default PetHistoryAdmin;
