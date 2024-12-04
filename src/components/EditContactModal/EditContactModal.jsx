import React from "react";

function EditContactModal({ onClose }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "1",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          paddingRight: "35px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ margin: "0 0 20px 0" }}>Añadir/Editar Contacto</h2>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="nombre"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="apellidos"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="numero"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Número
            </label>
            <input
              type="text"
              id="numero"
              name="numero"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              style={{
                padding: "10px 15px",
                borderRadius: "4px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                padding: "10px 15px",
                borderRadius: "4px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContactModal;
