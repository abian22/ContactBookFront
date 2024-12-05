import "./DeleteContactModal.css"
import { deleteContact } from "../../services/contact";

function DeleteContactModal({ onClose, id }) {

  const handleDeleteContact = async () => {
    await deleteContact(id)
  }
    return (
      <div className="modal-overlay">
        <div className="delete-modal-content">
          <h3>Are you sure?</h3>
          <p className="delete-modal-text">
            Do you want to delete this contact? This action cannot be undone.
          </p>
          <div className="delete-modal-actions">
            <button className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-delete" onClick={handleDeleteContact}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default DeleteContactModal;
  