import React from "react";

export const EditTableRow = ({
  product,
  handleEditFormChange,
  editFormData,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td >
        <input
          type="text"
          name="product_name"
          required="required"
          placeholder="Enter a product name..."
          value={editFormData.product_name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="category_name"
          value={editFormData.category_name}
          onChange={handleEditFormChange}
          placeholder="Enter category..."
        />
      </td>
      <td>
        <input
          type="text"
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
          placeholder="Enter description..."
        />
      </td>
      <td>{product.created_at}</td>
      <td>
        <input
          type="text"
          name="status"
          required="required"
          value={editFormData.status}
          onChange={handleEditFormChange}
          placeholder="Enter status..."
        />
      </td>
      <td>
        <button type="submit" className="btn btn-success">
          save
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleCancelClick}
        >
          cancel
        </button>
      </td>
    </tr>
  );
};
