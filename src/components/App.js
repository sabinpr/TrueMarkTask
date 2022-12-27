import React, { useEffect, useState } from "react";

import axios from "axios";
import ProductTable from "./ProductTable";
import { AddNewProduct } from "./AddNewProduct";

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
  useEffect(() => {
    axios
      .get("https://product-fhqo.onrender.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Add new product</h2>
      <AddNewProduct
        products={products}
        setProducts={setProducts}
        addFormData={addFormData}
        setAddFormData={setAddFormData}
      />
      <ProductTable
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
