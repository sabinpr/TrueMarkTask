import React, { Fragment } from "react";
import { EditTableRow } from "./EditTableRow";
import { IndividualProduct } from "./IndividualProduct";

const ProductTable = ({
  products,
  setProducts,
  editProductId,
  setEditProductId,
  editFormData,
  setEditFormData,
  search,
}) => {
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedProduct = {
      id: editProductId,
      product_name: editFormData.product_name,
      category_name: editFormData.category_name,
      description: editFormData.description,
      status: editFormData.status,
      created_at: editFormData.created_at,
    };
    const newProducts = [...products];

    const index = products.findIndex((product) => product.id === editProductId);

    newProducts[index] = editedProduct;

    setProducts(newProducts);

    setEditProductId(null);
  };

  const handleEditClick = (event, product) => {
    event.preventDefault();
    setEditProductId(product.id);

    const formValues = {
      product_name: product.product_name,
      category_name: product.category_name,
      description: product.description,
      status: product.status,
      created_at: product.created_at,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditProductId(null);
  };

  const handleDeleteClick = (productId) => {
    const newProducts = [...products];

    const index = products.findIndex((product) => product.id === productId);

    newProducts.splice(index, 1);

    setProducts(newProducts);
  };

  const displayProducts = products
    .filter((product) => {
      return search.toLowerCase() === ""
        ? product
        : product.product_name.toLowerCase().includes(search) ||
            product.category_name.toLowerCase().includes(search);
    })
    .map((product) => {
      return (
        <Fragment key={product.id}>
          {editProductId === product.id ? (
            <EditTableRow
              product={product}
              handleEditFormChange={handleEditFormChange}
              editFormData={editFormData}
              handleCancelClick={handleCancelClick}
            />
          ) : (
            <IndividualProduct
              product={product}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          )}
        </Fragment>
      );
    });

  return (
    <form className="table-wrapper" onSubmit={handleEditFormSubmit}>
      {/* <div className="table-responsive"> */}
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{displayProducts}</tbody>
      </table>
      {/* </div> */}
    </form>
  );
};

export default ProductTable;
