import React from "react";
import { nanoid } from "nanoid";

export const AddNewProduct = ({
  products,
  setProducts,
  addFormData,
  setAddFormData,
}) => {
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: nanoid(),
      product_name: addFormData.product_name,
      category_name: addFormData.category_name,
      description: addFormData.description,
      status: addFormData.status,
      created_at: new Date().toLocaleString(),
    };

    const newProducts = [...products, newProduct];
    setProducts(newProducts);

    setAddFormData({
      product_name: "",
      category_name: "",
      description: "",
      status: "",
    });
  };

  return (
    <form onSubmit={handleAddFormSubmit}>
      <input
        value={addFormData.product_name}
        type="text"
        name="product_name"
        required="required"
        placeholder="Enter a product name..."
        onChange={handleAddFormChange}
      />
      <input
        value={addFormData.category_name}
        type="text"
        name="category_name"
        required="required"
        placeholder="Enter category..."
        onChange={handleAddFormChange}
      />
      <input
        value={addFormData.description}
        type="text"
        name="description"
        required="required"
        placeholder="Enter description..."
        onChange={handleAddFormChange}
      />
      <input
        value={addFormData.status}
        type="text"
        name="status"
        required="required"
        placeholder="Enter status..."
        onChange={handleAddFormChange}
      />
      <button className="btn btn-success" type="submit">
        Add
      </button>
    </form>
  );
};
