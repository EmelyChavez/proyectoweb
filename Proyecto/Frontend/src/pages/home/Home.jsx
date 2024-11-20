import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeClient from "../../pages/cliente/HomeClient";
import PetRegistration from "../../components/cliente/petRegistration/PetRegistration";
import Appointment from "../../components/cliente/appointment/Appointment";
import MyAppointment from "../../components//cliente/myAppointment/MyAppointment";
import MyPet from "../../components/cliente/myPet/MyPet";
import VaccinationCard from "../../components/cliente/vaccinationCard/VaccinationCard";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeClient />} />
        <Route path="/sobre-nosotros" element={<HomeClient />} />
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
