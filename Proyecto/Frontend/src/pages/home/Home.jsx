import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeClient from "../../pages/cliente/HomeClient";
import PetRegistration from "../../components/cliente/petRegistration/PetRegistration";
import Appointment from "../../components/cliente/appointment/Appointment";
import MyAppointment from "../../components//cliente/myAppointment/MyAppointment";
import MyPet from "../../components/cliente/myPet/MyPet";
import VaccinationCard from "../../components/cliente/vaccinationCard/VaccinationCard";
import HomeVet from "../../pages/veterinario/HomeVet";
import SelectedPet from "../../components/veterinario/selectedPet/SelectedPet";
import Appointments from "../../components/veterinario/appointments/Appointments";
import Login from "../../pages/login/Login";
import AppointmentAssignment from "../../components/veterinario/appointmentAssignment/AppointmentAssignment";
import VaccineAssignment from "../../components/veterinario/vaccineAssignment/VaccineAssignment";
import MedicalRecordList from "../../components/veterinario/medicalRecordList/MedicalRecordList";
import MedicalRecordCard from "../../components/veterinario/medicalRecordCard/MedicalRecordCard";
import HomeAdmin from "../../pages/administrador/HomeAdmin";
import UsersList from "../../components/administrador/usersList/UsersList";
import SelectedUser from "../../components/administrador/selectedUser/SelectedUser";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/veterinario" element={<HomeVet />} />
        <Route path="/informacion-mascota/:appointmentId" element={<SelectedPet />} />
        <Route path="/citas-veterinario" element={<Appointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeClient />} />
        <Route path="/sobre-nosotros" element={<HomeClient />} />
        <Route path="/registrar-mascota" element={<PetRegistration />} />
        <Route path="/agendar-cita" element={<Appointment />} />
        <Route path="/mis-citas" element={<MyAppointment />} />
        <Route path="/mis-mascotas" element={<MyPet />} />
        <Route path="/tarjeta-vacunas/:petId" element={<VaccinationCard />} />
        <Route path="/asignar-cita/:appointmentId" element={<AppointmentAssignment />} />
        <Route path="/asignar-vacuna/:petId/:appointmentId" element={<VaccineAssignment />} />
        <Route path="/historial-mascota/:petId" element={<MedicalRecordList />} />
        <Route path="/detalles-historial/:recordId" element={<MedicalRecordCard />} />

        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/usuarios-admin" element={<UsersList />} />
        <Route path="/perfil-usuario/:userId" element={<SelectedUser />} />

      </Routes>
    </Router>
  );
};

export default Home;
