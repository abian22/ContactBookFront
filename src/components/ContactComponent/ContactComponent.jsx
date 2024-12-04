import profileIcon from "../../assets/profileIcon.svg";
import cancelIcon from "../../assets/cancelIcon.svg";
import editIcon from "../../assets/editIcon.svg";
import EditContactModal from "../EditContactModal/EditContactModal";
import DeleteContactModal from "../DeleteContactModal/DeleteContactModal";
import ContactDataComponent from "../ContactDataComponent/ContactDataComponent";
import { useState } from "react";
import "./ContactComponent.css"; 

function ContactComponent({name, category, email, number}) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditOpenModal = () => setIsEditModalOpen(true);
  const handleEditCloseModal = () => setIsEditModalOpen(false);
  const handleDeleteOpenModal = () => setIsDeleteModalOpen(true);
  const handleDeleteCloseModal = () => setIsDeleteModalOpen(false);

  return (
    <section className="contact-container">
      {isEditModalOpen && <EditContactModal onClose={handleEditCloseModal} />}
      {isDeleteModalOpen && <DeleteContactModal onClose={handleDeleteCloseModal} />}
      <article className="contact-card">
        <button className="icon-button edit-button" onClick={handleEditOpenModal}>
          <img src={editIcon} alt="Edit contact" className="icon" />
        </button>
        <button className="icon-button delete-button" onClick={handleDeleteOpenModal}>
          <img src={cancelIcon} alt="Delete contact" className="icon" />
        </button>
        <ContactDataComponent name={name}  category={category} email={email} number={number}/>
      </article>
    </section>
  );
}

export default ContactComponent;
