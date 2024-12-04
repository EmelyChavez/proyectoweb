import React from "react";
import "./UserCard.css"; // Asegúrate de ajustar los estilos según el nuevo diseño
// import defaultAvatar from "../../../assets/DefaultAvatar.jpg"; // Imagen por defecto si no hay avatar

const UserCard = ({ user, onDelete, onViewProfile, onRoleChange }) => {
    const handleRoleChange = (event) => {
        const newRole = event.target.value;
        onRoleChange(user.id, newRole);
    };

    return (
        <div className="user-card">
            <img
                src={user.avatar || "https://via.placeholder.com/150"}
                alt={`foto de ${user.name}`}
                className="user-avatar"
            />
            <div className="user-info">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-email">{user.email}</p>
                <div className="user-role">
                    <label htmlFor={`role-select-${user.id}`}>Rol: </label>
                    <select
                        id={`role-select-${user.id}`}
                        value={user.role}
                        onChange={handleRoleChange}
                        className="role-select"
                    >
                        <option value="cliente">Cliente</option>
                        <option value="veterinario">Veterinario</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>
            <div className="user-actions">
                <button className="btn delete-user-btn" onClick={() => onDelete(user.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default UserCard;
