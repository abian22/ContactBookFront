import "./AddContactModal.css";

function AddContactModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add Contact</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" id="name" name="name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name" className="form-label">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="number" className="form-label">
              Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
            />
          </div>
          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContactModal;
