import React from "react";

function DeleteContactModal({ onClose }) {
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
          width: "300px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>¿Estás seguro?</h3>
        <p style={{ marginBottom: "20px" }}>
          ¿Deseas eliminar este contacto? Esta acción no se puede deshacer.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            style={{
              padding: "10px 15px",
              borderRadius: "4px",
              backgroundColor: "#f5f5f5",
              border: "1px solid #ccc",
              cursor: "pointer",
              flex: "1",
              marginRight: "10px",
            }}
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            style={{
              padding: "10px 15px",
              borderRadius: "4px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              flex: "1",
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteContactModal;
