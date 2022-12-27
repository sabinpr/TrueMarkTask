import React from "react";

const InputForm = ({ addFormData, setAddFormData }) => {
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  return (
    <>
      <input
        type="text"
        name="product_name"
        required="required"
        placeholder="Enter a product name..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="category_name"
        required="required"
        placeholder="Enter category..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="description"
        required="required"
        placeholder="Enter description..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="status"
        required="required"
        placeholder="Enter status..."
        onChange={handleAddFormChange}
      />
    </>
  );
};

export default InputForm;
