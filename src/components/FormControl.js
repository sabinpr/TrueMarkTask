import React from "react";

const FormControl = ({
  handleAddFormChange,
  formId,
  value,
  name,
  placeholder,
}) => {
  return (
    <div className="form-control">
      <label htmlFor={formId}>Product Name</label>
      <input
        className="form-control"
        id={formId}
        value={value}
        type="text"
        name={name}
        required="required"
        placeholder={placeholder}
        onChange={handleAddFormChange}
      />
    </div>
  );
};

export default FormControl;
