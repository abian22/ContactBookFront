import profileIcon from "../../assets/profileIcon.svg"
import "./ContactDataComponent.css"

function ContactDataComponent({ name, number, category, email}) {
  return (
    <div className="contact-info">
          <img src={profileIcon} alt="Profile" className="profile-icon" />
          <div className="contact-details">
            <p className="contact-name"><strong>Nombre:</strong> {name}</p>
            <p className="contact-phone"><strong>Teléfono:</strong> {number}</p>
            <p className="contact-category"><strong>Categoría:</strong> {category}</p>
            <p className="contact-email"><strong>Email:</strong> {email}</p>
          </div>
        </div>
  )
}

export default ContactDataComponent