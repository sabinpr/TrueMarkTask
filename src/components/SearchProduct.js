import React from "react";

const SearchProduct = ({ setSearch }) => {
  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchProduct;
