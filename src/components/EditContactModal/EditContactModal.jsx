import InputModal from "../InputModal/InputModal";
import { useState } from "react";
import { updateContact } from "../../services/contact";
function EditContactModal({
  onClose,
  id,
  name,
  lastName,
  category,
  email,
  number,
}) {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedLastName, setUpdatedLastName] = useState(lastName);
  const [updatedCategory, setUpdatedCategory] = useState(category);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedNumber, setUpdatedNumber] = useState(number);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleEditContact = async (e) => {
    e.preventDefault();

    // Validating fields
    let hasError = false;

    // Same validation as AddContactComponent
    if (!updatedName) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    const phonePattern = /^[0-9]{9,11}$/;
    if (!phonePattern.test(updatedNumber)) {
      setPhoneError(true);
      hasError = true;
    } else {
      setPhoneError(false);
    }

    // Edit doesn't run if there are some error
    if (hasError) {
      return;
    }

    try {
      await updateContact(
        id,
        updatedName,
        updatedLastName,
        updatedCategory,
        updatedEmail,
        updatedNumber
      );

      alert("Contact updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("Failed to update the contact. Please try again.");
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Edit Contact</h2>
        <form onSubmit={handleEditContact}>
          <InputModal
            label="Name *"
            value={updatedName}
            placeHolder={name}
            onChange={(e) => setUpdatedName(e.target.value)}
            className={nameError ? "input-error-border" : ""}
            labelClassName={nameError ? "input-error-label" : ""}
          />
          <InputModal
            label="Last Name"
            value={updatedLastName}
            onChange={(e) => setUpdatedLastName(e.target.value)}
          />
          <InputModal
            label="Phone number *"
            type="tel"
            value={updatedNumber}
            pattern="^[0-9]{9,11}$"
            title="Phone number must be between 9 and 11 digits"
            className={phoneError ? "input-error-border" : ""}
            labelClassName={phoneError ? "input-error-label" : ""}
            onChange={(e) => setUpdatedNumber(e.target.value)}
          />
          <InputModal
            label="Email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
          <InputModal
            label="Category"
            name="category"
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
          />
          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-save">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContactModal;
