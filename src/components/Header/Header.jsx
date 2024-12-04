import AddContactModal from "../AddContactModal/AddContactModal";
import "./Header.css"

function Header({ isModalOpen, handleOpenModal, handleCloseModal }) {
  return (
    <div className="header">
      <b>
        <p className="header-title">CONTACT BOOK</p>
      </b>
      <button className="header-add-button" onClick={handleOpenModal}>
        +
      </button>
      {isModalOpen && <AddContactModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Header;
