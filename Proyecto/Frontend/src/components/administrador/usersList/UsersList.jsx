import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UsersList.css";
import UserCard from "../userCard/UserCard";
import Decoracion from "../../../assets/decoracion.png";

const UsersList = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const savedUsers = JSON.parse(localStorage.getItem("users"));
        console.log("Usuarios guardados en localStorage:", JSON.parse(localStorage.getItem("users")));

        if (savedUsers && savedUsers.length > 0) {
            setUsers(savedUsers); // Cargar usuarios del localStorage
        } else {
            const dummyUsers = [
                {
                    id: "1",
                    name: "Juan Pérez",
                    email: "juan.perez@gmail.com",
                    avatar: "https://via.placeholder.com/100",
                    role: "cliente",
                },
                {
                    id: "2",
                    name: "Ana García",
                    email: "ana.garcia@gmail.com",
                    avatar: "https://via.placeholder.com/100",
                    role: "veterinario",
                },
                {
                    id: "3",
                    name: "Carlos Ruiz",
                    email: "carlos.ruiz@gmail.com",
                    avatar: "https://via.placeholder.com/100",
                    role: "admin",
                },
            ];
            localStorage.setItem("users", JSON.stringify(dummyUsers)); // Guardar usuarios iniciales
            console.log("Usuarios guardados en localStorage:", JSON.parse(localStorage.getItem("users")));
            setUsers(dummyUsers); // Establecer usuarios iniciales
        }
    }, []);

    const deleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const handleRoleChange = (userId, newRole) => {
        const updatedUsers = users.map((user) =>
            user.id === userId ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers)); // Actualiza el localStorage
    };

    const viewUserProfile = (userId) => {
        navigate(`/perfil-usuario/${userId}`);
    };

    return (
        <div className="my-user-container">
            <h1 className="titulo">Lista de Usuarios</h1>
            {users.length === 0 ? (
                <h3>No hay usuarios registrados</h3>
            ) : (
                <div className="user-list">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            onDelete={deleteUser}
                            onViewProfile={viewUserProfile}
                            onRoleChange={handleRoleChange}
                        />
                    ))}
                </div>
            )}
            <button className="close-btn" onClick={() => navigate("/admin")}>
                <i className="fas fa-times"></i>
            </button>
            <img id="decoracion-image-top-left" src={Decoracion} alt="Decoracion" />
        </div>
    );
};

export default UsersList;
