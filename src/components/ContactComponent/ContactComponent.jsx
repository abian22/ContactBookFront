import profileIcon from "../../assets/profileIcon.svg"

function ContactComponent() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <div style={{width: "400px", padding: "20px", borderRadius:"8px", backgroundColor:"#f9f9f9", boxShadow:" 0 4px 8px rgba(0, 0, 0, 0.1)"}}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={profileIcon} alt="Profile Icon" style={{ width: "50px", height: "50px" }} />
        <div style={{ justifyContent:"center"}}>
          <p style={{ margin: 0, fontWeight: "bold", }}>Nombre: John</p>
          <p style={{ margin: 0 }}>Apellidos: Doe</p>
          <p style={{ margin: 0 }}>Teléfono: +1 234 567 890</p>
          <p style={{ margin: 0 }}>Category: +1 234 567 890</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactComponent