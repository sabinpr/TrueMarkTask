import React, { useEffect, useState } from "react";
import "../css/App.css";
import axios from "axios";
import ProductTable from "./ProductTable";
import { AddNewProduct } from "./AddNewProduct";
import SearchProduct from "./SearchProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    product_name: "",
    category_name: "",
    description: "",
    status: "",
  });
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    product_name: "",
    category_name: "",
    description: "",
    status: "",
    created_at: "",
  });
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    axios
      .get("https://product-fhqo.onrender.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-container">
      <hr />
      <h1>Truemark Task</h1>
      <div className="top-container">
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setClicked(!clicked)}
          >
            Add new product
          </button>
          {clicked ? (
            <AddNewProduct
              products={products}
              setProducts={setProducts}
              addFormData={addFormData}
              setAddFormData={setAddFormData}
            />
          ) : (
            ""
          )}
        </div>

        <SearchProduct setSearch={setSearch} />
      </div>
      <p>Note: To use Search filter first Edit or delete the product with Product name= "Table" as there is no category name in it or else it will show error.</p>
      <ProductTable
        search={search}
        setProducts={setProducts}
        products={products}
        editProductId={editProductId}
        setEditProductId={setEditProductId}
        editFormData={editFormData}
        setEditFormData={setEditFormData}
      />
    </div>
  );
};

export default App;
