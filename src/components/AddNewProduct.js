import React from "react";
import { nanoid } from "nanoid";
import FormControl from "./FormControl";

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
      <FormControl
        formId="product-name"
        value={addFormData.product_name}
        name="product_name"
        placeholder="Enter a Product name..."
        handleAddFormChange={handleAddFormChange}
      />
      <FormControl
        value={addFormData.category_name}
        formId="category_name"
        name="category_name"
        placeholder="Enter category..."
        handleAddFormChange={handleAddFormChange}
      />
      <FormControl
        value={addFormData.description}
        formId="description"
        name="description"
        placeholder="Enter description..."
        handleAddFormChange={handleAddFormChange}
      />
      <FormControl
        value={addFormData.status}
        formId="status"
        name="status"
        placeholder="Enter status..."
        handleAddFormChange={handleAddFormChange}
      />
      <button className="btn btn-success" type="submit">
        Add
      </button>
    </form>
  );
};
