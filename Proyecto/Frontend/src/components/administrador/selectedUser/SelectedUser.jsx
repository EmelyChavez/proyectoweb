import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SelectedUser.css";
import Decoracion from "../../../assets/decoracion.png";
import SuccessModal from "../../../modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../modals/ErrorModal/ErrorModal";
import PastDateModal from "../../../modals/PastDateModal/PastDateModal"; // Importa el modal

const SelectedUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [newRole, setNewRole] = useState("");

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    // const [isPastDateModalOpen, setIsPastDateModalOpen] = useState(false); // Estado para el modal de fecha pasada

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = savedUsers.find((u) => u.id === userId);
        setUser(foundUser);
        setNewRole(foundUser?.role || "");
    }, [userId]);

    const handleRoleChange = (e) => {
        setNewRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = savedUsers.map((u) =>
            u.id === userId ? { ...u, role: newRole } : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/usuarios-admin");
    };

    if (!user) {
        return <h3>Cargando usuario...</h3>;
    }

    // const handleModalClose = () => {
    //     setIsModalOpen(false);
    //     navigate("/mis-citas");
    // };

    // const handleErrorModalClose = () => {
    //     setIsErrorModalOpen(false);
    // };

    // const handlePastDateModalClose = () => {
    //     setIsPastDateModalOpen(false);
    // };

    return (
        <div className="edit-role-container">
            <h1>Editar Rol de Usuario</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    Usuario: <strong>{user.name}</strong>
                </p>
                <p>Email: <strong>{user.email}</strong></p>
                <label htmlFor="role">Nuevo Rol</label>
                <select id="role" value={newRole} onChange={handleRoleChange}>
                    <option value="cliente">Cliente</option>
                    <option value="veterinario">Veterinario</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Guardar Cambios</button>
            </form>
            <button onClick={() => navigate("/usuarios-admin")}>Cancelar</button>
        </div>
    );
};

export default SelectedUser;
