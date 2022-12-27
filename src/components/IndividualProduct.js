import React from "react";

export const IndividualProduct = ({
  product,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <tr>
      <td>{product.product_name}</td>
      <td>{product.category_name}</td>
      <td>{product.description}</td>
      <td>{product.created_at}</td>
      <td>{product.status}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, product)}
          className="btn btn-success"
        >
          edit
        </button>
        <button
          type="button"
          onClick={() => handleDeleteClick(product.id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};
