import React, { useState } from "react";
import Header from "../components/utils/Header";
import Filter from "../components/Home/Filter";
import ProductList from "../components/Home/ProductList";
import products from "../data/Products";
import Pagination from "../components/utils/Pagination";

const HomePage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [current, setCurrent] = useState(1);
  const itemsPerPage = 6;

  const filterProducts = (term, category) => {
    let filtered = products;

    if (category && category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (term) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrent(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(term, null);
  };

  const handleFilter = (category) => {
    filterProducts(searchTerm, category);
  };

  const numPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (current - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredProducts.slice(startIndex, endIndex);

  const onChange = (pageNumber) => {
    setCurrent(pageNumber);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="container">
        <Filter onFilter={handleFilter} />
        
        {filteredProducts.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <h3 className="text-danger">Product Not Found</h3>
          </div>
        ) : (
          <>
            <ProductList products={currentData} />
            <Pagination onChange={onChange} pageCount={numPages} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
