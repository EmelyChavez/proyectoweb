import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";
import hamster from "../../../assets/hamster.png";
import Decoracion from "../../../assets/decoracion.png";

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

const Appointment = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [appointmentData, setAppointmentData] = useState({
        pet: "",
        service: "",
        description: "",
        petImage: "",
        date: "",
        time: "",
    });
    const timeSlots = generateTimeSlots([7, 0], [17, 30], 30);
    useEffect(() => {
        const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
        setPets(savedPets);
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setAppointmentData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        if (id === "pet") {
            const selectedPet = pets.find((pet) => pet.name === value);
            setAppointmentData((prevData) => ({
                ...prevData,
                petImage: selectedPet ? selectedPet.image : "",
            }));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const { pet, service, date, time } = appointmentData;
        if (!pet || !service || !date || !time) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }
        const newAppointment = {
            ...appointmentData,
            id: crypto.randomUUID(),
        };

        const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        localStorage.setItem("appointments", JSON.stringify([...savedAppointments, newAppointment]));

        alert("Cita agendada correctamente.");
        navigate("/mis-citas");
    }

    return (
        <div className="appointment-container">
            <h1>Realizar Cita Médica</h1>
            <div className="appointment-card">
                <form className="appointment-form" onSubmit={handleSubmit}>
                    <label htmlFor="pet">Mascota</label>
                    <select id="pet" value={appointmentData.pet} onChange={handleInputChange}>
                        <option value="">Seleccionar mascota</option>
                        {pets.map((pet) => (
                            <option key={pet.id} value={pet.name}>
                                {pet.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="service">Servicio</label>
                    <select id="service" name="service" value={appointmentData.service} onChange={handleInputChange}>
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
                        placeholder="Detalles adicionales"></textarea>

                    <label htmlFor="date">Fecha</label>
                    <input type="date" id="date" name="date" value={appointmentData.date} onChange={handleInputChange}/>
                    <label htmlFor="time">Hora</label>
                    <select id="time" name="time" value={appointmentData.time} onChange={handleInputChange}>
                        <option value="">Seleccionar hora</option>
                        {timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>

                    <button type="submit" className="appointment-button">
                        Agendar Cita
                    </button>
                </form>
                <img src={hamster} alt="Hamster" className="hamster-img" />
            </div>
            <img id="decoracion-image-bottom-left" src={Decoracion} alt="Decoracion" />
            { }
            <button className="close-button" onClick={() => navigate("/sobre-nosotros")}>
                <i className="fas fa-times"></i> { }
            </button>
        </div>
    );
};

export default Appointment;