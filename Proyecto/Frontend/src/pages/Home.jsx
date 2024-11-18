import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import PetRegistration from "../components/petRegistration/PetRegistration";
import Appointment from "../components/appointment/Appointment";
import MyAppointment from "../components/myAppointment/MyAppointment";
import MyPet from "../components/myPet/MyPet";
import VaccinationCard from "../components/vaccinationCard/VaccinationCard"; // Importamos el nuevo componente

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<HomePage />} />
        <Route path="/registrar-mascota" element={<PetRegistration />} />
        <Route path="/agendar-cita" element={<Appointment />} />
        <Route path="/mis-citas" element={<MyAppointment />} />
        <Route path="/mis-mascotas" element={<MyPet />} />
        <Route path="/tarjeta-vacunas/:petId" element={<VaccinationCard />} /> 
      </Routes>
    </Router>
  );
};

export default Home;
