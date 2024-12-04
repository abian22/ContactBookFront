import React from 'react'

function InputModal({ label, id, type = "text", name }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} id={id} name={name} className="form-input" />
    </div>
  )
}

export default InputModal