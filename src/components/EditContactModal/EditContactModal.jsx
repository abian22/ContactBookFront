import InputModal from "../InputModal/InputModal";
function EditContactModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add Contact</h2>
        <form>
          <InputModal label="Name" id="name" name="name" />
          <InputModal label="Last Name" id="last-name" name="last-name" />
          <InputModal label="Number" id="number" name="number" />
          <InputModal label="Email" id="email" name="email" type="email" />
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
