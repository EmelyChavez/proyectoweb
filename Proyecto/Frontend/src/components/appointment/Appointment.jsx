import React from "react";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";
import hamster from "../../assets/hamster.png";
import Decoracion from "../../assets/decoracion.png";

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
    const timeSlots = generateTimeSlots([7, 0], [17, 30], 30);

    return (
        <div className="appointment-container">
            <h1>Realizar Cita Médica</h1>
            <div className="appointment-card">
                <form className="appointment-form">
                    <label htmlFor="pet">Mascota</label>
                    <select id="pet" name="pet">
                        <option value="">Seleccionar mascota</option>
                        <option value="dog">Perro</option>
                        <option value="cat">Gato</option>
                    </select>

                    <label htmlFor="service">Servicio</label>
                    <select id="service" name="service">
                        <option value="">Seleccionar servicio</option>
                        <option value="grooming">Grooming</option>
                        <option value="consulta">Consulta Médica</option>
                        <option value="emergencias">Emergencias</option>

                    </select>

                    <label htmlFor="description">Descripción</label>
                    <textarea id="description" name="description" placeholder="Descripción"></textarea>

                    <label htmlFor="date">Fecha</label>
                    <input type="date" id="date" name="date" />

                    <label htmlFor="time">Hora</label>
                    <select id="time" name="time">
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
            <img id="decoracion-image-left" src={Decoracion} alt="Decoracion" />
            { }
            <button className="close-button" onClick={() => navigate("/sobre-nosotros")}>
                <i className="fas fa-times"></i> { }
            </button>
        </div>
    );
};

export default Appointment;