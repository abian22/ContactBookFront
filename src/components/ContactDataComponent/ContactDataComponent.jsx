import profileIcon from "../../assets/profileIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg"
import emailIcon from "../../assets/emailIcon.svg"
import "./ContactDataComponent.css";

function ContactDataComponent({ name, lastName, number, category, email }) {
  return (
    <div className="contact-info">
      <img src={profileIcon} alt="Profile" className="profile-icon" />
      <div className="contact-details">
        <p className="contact-name">
          <strong> {name} {lastName}</strong>{category ? ` - ${category}` : ""}
        </p>
        <p className="contact-phone">
          <img src={phoneIcon}/> {number}
        </p>
        {email &&(
        <p className="contact-email">
        <img src={emailIcon}/> {email}
        </p>)}
      </div>
    </div>
  );
}

export default ContactDataComponent;
