import "./InputModal.css";

function InputModal({
  label,
  id,
  name,
  value,
  onChange,
  className,
  labelClassName,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id} className={`form-label ${labelClassName}`}>
        {label}
      </label>

      {name === "category" ? (
        <select
          id={id}
          name={name}
          className="form-input"
          value={value}
          onChange={onChange}
        >
          <option value="">Select category</option>
          <option value="Family">Family</option>
          <option value="Friend">Friend</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
      ) : (
        <input
          type="text"
          id={id}
          name={name}
          className={`form-input ${className}`} 
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default InputModal;
