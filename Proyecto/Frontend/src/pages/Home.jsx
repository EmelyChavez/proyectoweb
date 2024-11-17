import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import PetRegistration from "../components/petRegistration/PetRegistration";
import Appointment from "../components/appointment/Appointment";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<HomePage />} />
        <Route path="/registrar-mascota" element={<PetRegistration />} />
        <Route path="/agendar-cita" element={<Appointment />} />
      </Routes>
    </Router>
  );
};

export default Home;
