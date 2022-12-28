import React from "react";

const SearchProduct = ({ setSearch }) => {
  return (
    <form>
      <input
        type="text"
        className="form-control search-form"
        placeholder="Search by product name or category..."
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchProduct;
