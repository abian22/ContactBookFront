import "./InputModal.css"
function InputModal({ label, id,name }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={"text"} id={id} name={name} className="form-input" />
    </div>
  )
}

export default InputModal