import profileIcon from "../../assets/profileIcon.svg";
import cancelIcon from "../../assets/cancelIcon.svg";
import editIcon from "../../assets/editIcon.svg";

function ContactComponent() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div
        style={{
          position: "relative",
          width: "400px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={editIcon}
          alt="Edit Icon"
          style={{
            position: "absolute",
            top: "10px",
            right: "40px",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
        <img
          src={cancelIcon}
          alt="Cancel Icon"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={profileIcon}
            alt="Profile Icon"
            style={{ width: "50px", height: "50px" }}
          />
          <div style={{ justifyContent: "center" }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>Nombre: John</p>
            <p style={{ margin: 0 }}>Teléfono: +1 234 567 890</p>
            <p style={{ margin: 0 }}>Category: Developer</p>
            <p style={{ margin: 0 }}>Email: john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
