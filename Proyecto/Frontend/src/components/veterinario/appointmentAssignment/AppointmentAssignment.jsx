import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AppointmentAssignment.css";
import hamster from "../../../assets/hamster.png";
import Decoracion from "../../../assets/decoracion.png";
import SuccessModal from "../../../modals/SuccessModal/SuccessModal"; 
import ErrorModal from "../../../modals/ErrorModal/ErrorModal"; 

const generateTimeSlots = (start, end, interval) => {
    const times = [];
    let current = new Date();
    current.setHours(...start);
    const endTime = new Date();
    endTime.setHours(...end);

    while (current <= endTime) {
        const hours = current.getHours();
        const minutes = current.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHour =
            (hours % 12 === 0 ? 12 : hours % 12) + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
        times.push(formattedHour);
        current.setMinutes(current.getMinutes() + interval);
    }
    return times;
};

const AppointmentAssignment = () => {
    const navigate = useNavigate();
    const { appointmentId } = useParams();
    const [pets, setPets] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); // Para el modal de error
    const [appointments, setAppointments] = useState([]);
    const [appointmentData, setAppointmentData] = useState({
        pet: { id: "", name: "" },
        service: "",
        description: "",
        petImage: "",
        date: "",
        time: "",
    });
    const timeSlots = generateTimeSlots([7, 0], [17, 30], 30);

    useEffect(() => {
        const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
        console.log("Mascota seleccionada:", pet);
        setPets(savedPets);

        const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        const appointment = savedAppointments.find((a) => a.id === appointmentId);

        if (appointment) {
            setAppointmentData(appointment);
        } else {
            alert("No se encontró la cita.");
            navigate("/citas-veterinario");
        }
    }, [appointmentId, navigate]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setAppointmentData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        if (id === "pet") {
            const [selectedId, selectedName] = value.split("|");
            const selectedPet = pets.find((pet) => pet.id === selectedId);
            setAppointmentData((prevData) => ({
                ...prevData,
                pet: { id: selectedId, name: selectedName },
                petImage: selectedPet ? selectedPet.image : "",
            }));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const { pet, service, date, time } = appointmentData;
        if (!pet.id || !service || !date || !time) {
            setIsErrorModalOpen(true); 
            return;
        }

        const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        const updatedAppointments = savedAppointments.map((a) =>
            a.id === appointmentId ? { ...appointmentData } : a
        );
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
        setIsModalOpen(true);

    }

    const handleModalClose = () => {
        setIsModalOpen(false); 
        navigate("/citas-veterinario");
    };
    const handleErrorModalClose = () => {
        setIsErrorModalOpen(false); 
    };
    return (
        <div className="appointment-container">
            <h1>Editar Cita Médica</h1>
            <div className="appointment-card">
                <form className="appointment-form" onSubmit={handleSubmit}>
                    <label htmlFor="pet">Mascota</label>
                    <select
                        id="pet"
                        value={`${appointmentData.pet.id}|${appointmentData.pet.name}`}
                        onChange={handleInputChange}
                        disabled
                    >
                        <option value="">Seleccionar mascota</option>
                        {pets.map((pet) => (
                            <option key={pet.id} value={`${pet.id}|${pet.name}`}>
                                {pet.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="service">Servicio</label>
                    <select
                        id="service"
                        name="service"
                        value={appointmentData.service}
                        onChange={handleInputChange}>
                        <option value="">Seleccionar servicio</option>
                        <option value="grooming">Grooming</option>
                        <option value="consulta">Consulta Médica</option>
                        <option value="emergencias">Emergencias</option>

                    </select>

                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        value={appointmentData.description}
                        onChange={handleInputChange}
                        placeholder="Detalles adicionales"
                    ></textarea>

                    <label htmlFor="date">Fecha</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={appointmentData.date}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="time">Hora</label>
                    <select
                        id="time"
                        name="time"
                        value={appointmentData.time}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccionar hora</option>
                        {timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>

                    <button type="submit" className="appointment-button">
                        Guardar cambios
                    </button>
                </form>
                <img src={hamster} alt="Hamster" className="hamster-img" />
            </div>
            <img id="decoracion-image-bottom-left" src={Decoracion} alt="Decoracion" />
            <SuccessModal isOpen={isModalOpen} onClose={handleModalClose} />
            <ErrorModal isOpen={isErrorModalOpen} onClose={handleErrorModalClose} />
            <button
                className="close-button"
                onClick={() => navigate(`/informacion-mascota/${appointmentData.id}`)}
            >
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
};

export default AppointmentAssignment;