import InputModal from "../InputModal/InputModal";
import { createContact } from "../../services/contact";
import { useEffect, useState } from "react";
import "./AddContactModal.css";

function AddContactModal({ onClose }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);


  const handleAddContact = async (e) => {
    e.preventDefault();

    // Name validation
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    // Phone validation (only numbers and correct format)
    const phonePattern = /^[0-9]{9,11}$/; // Regex to check the phone format
    if (!phonePattern.test(phoneNumber)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    // If there are errors, don't submit the form
    if (!name || !phonePattern.test(phoneNumber)) {
      return;
    }

    const contactData = {
      name,
      lastName: lastName || null,
      phoneNumber,
      email: email || null,
      category: category || null,
    };

    try {
      const result = await createContact(contactData);
      if (result) {
        console.log("Contact added:", result);
        onClose();
      }
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add Contact</h2>
        <form>
          <InputModal
            label="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={nameError ? "input-error-border" : ""} 
            labelClassName={nameError ? "input-error-label" : ""}
          />
          <InputModal
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputModal
            label="Phone number *"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={phoneError ? "input-error-border" : ""} 
            labelClassName={phoneError ? "input-error-label" : ""}
            pattern="^[0-9]{9,11}$"
            title="Phone number must be between 9 and 11 digits"
          />
          <InputModal
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputModal
            label="Category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button className="btn btn-save" onClick={handleAddContact}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContactModal;
