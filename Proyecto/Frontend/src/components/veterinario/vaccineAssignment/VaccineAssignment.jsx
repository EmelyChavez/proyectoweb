import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./VaccineAssignment.css";
import hamster from "../../../assets/hamster.png";
import Decoracion from "../../../assets/decoracion.png";
import SuccessModal from "../../../modals/SuccessModal/SuccessModal"; 
import ErrorModal from "../../../modals/ErrorModal/ErrorModal"; 

const VaccineAssignment = () => {
    const navigate = useNavigate();
    const { petId, appointmentId } = useParams();
    const [petData, setPetData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
    const [vaccineData, setVaccineData] = useState({
        petId: "",
        petName: "",
        vaccine: "",
        date: "",
    });

    useEffect(() => {
        const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
        const pet = savedPets.find((p) => p.id === petId);

        if (pet) {
            setPetData(pet);
            setVaccineData((prevData) => ({
                ...prevData,
                petId: pet.id,
                petName: pet.name,
            }));
        }
    }, [petId]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setVaccineData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const { petId, vaccine, date } = vaccineData;
        if (!petId || !vaccine || !date) {
            setIsErrorModalOpen(true); 
            return;
        }

        const newVaccineRecord = {
            ...vaccineData,
            id: crypto.randomUUID(),
        };

        const savedVaccines = JSON.parse(localStorage.getItem("vaccines")) || [];
        localStorage.setItem("vaccines", JSON.stringify([...savedVaccines, newVaccineRecord]));
        setIsModalOpen(true);
        console.log(newVaccineRecord);

    }
    const handleModalClose = () => {
        setIsModalOpen(false);
        navigate(`/informacion-mascota/${appointmentId}`);
    }
    const handleErrorModalClose = () => {
        setIsErrorModalOpen(false); 
    };

    if (!petData) {
        return <h2>No se encontró información de esta mascota.</h2>;
    }

    return (
        <div className="appointment-container">
            <h1>Asignar Vacuna</h1>
            <div className="appointment-card">
                <form className="appointment-form" onSubmit={handleSubmit}>
                    <label htmlFor="vaccine">Nombre de la Vacuna</label>
                    <textarea
                        id="vaccine"
                        name="vaccine"
                        value={vaccineData.vaccine}
                        onChange={handleInputChange}
                        placeholder="Escribe el nombre de la vacuna"></textarea>

                    <label htmlFor="date">Fecha</label>
                    <input
                        type="date"
                        id="date" name="date"
                        value={vaccineData.date}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="appointment-button">
                    Asignar Vacuna
                    </button>
                </form>
                <img src={hamster} alt="Hamster" className="hamster-img" />
            </div>
            <img id="decoracion-image-bottom-left" src={Decoracion} alt="Decoracion" />
            <SuccessModal isOpen={isModalOpen} onClose={handleModalClose} />
            <ErrorModal isOpen={isErrorModalOpen} onClose={handleErrorModalClose} />
            <button className="close-button" onClick={() => navigate(`/informacion-mascota/${appointmentId}`)}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
};

export default VaccineAssignment;